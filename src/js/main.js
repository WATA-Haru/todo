"use strict"
import { statusEnum } from "./statusEnum.js";
import { isStatusDone, isStatusDeleted, isStatusTodo } from "./utils.js";

/**
 * todos has todo's content and status value
 * @typedef {Object} Todo - todo object
 * @property {string} id - Todo id (uuid). It is used when change indivisual todo item.
 * @property {string} content - The description of the todo item.
 * @property {statusEnum} status - todo status that defines statusEnum.
**/
/** @type {Todo[]} */
const todos = [];

/**
 * @param {string} inputContent todo content field.
 * @param {statusEnum} inputStatus todo status filld.
 */
function appendTodos(inputContent, inputStatus) {
    /**@type {Todo}*/
    const newTask = {
        id: crypto.randomUUID(),
        content: inputContent,
        status: inputStatus
    }
    todos.push(newTask);
}

/**
 * @description
 * check element <null></null> tag or not
 * @param {element} Element
 * @returns {boolean} is_tag
 */
function isNullTag(element)
{
    if (element.tagName === "NULL")
        return (true);
    return (false);
}

/**
 * @description
 * this function wrap createElement <br>
 * recieve className and innerText as option values <br>
 * createElementWrapper set these params.
 * @param {string} tag - html tag will be created
 * @param {string} className - (option) html class name
 * @param {string} innerText - (option) text content
 * @returns {Element} element - createElement result
 */
function createElementWrapper(tag, className, innerText) {
    /**@type {Element}*/
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (innerText) {
        element.textContent = innerText;
    }
    return element;
}

/**
 * @description
 *  createTodo() crates todo component and add it to todoArea
 */
function createTodo() {
    /**@type {Element | null} */
    const input = document.querySelector(".userInput");
    if (!input) {
        return ;
    }

    // add todo to todos
    /**@type {Element} */
    const todoArea = document.querySelector(".todoArea");
    if (!todoArea) {
        return ;
    }
    appendTodos(input.value, statusEnum.TODO);

    /**@type {Element} */
    const todoItemWrapper = createElementWrapper("div", "todoItemWrapper", null);
    if (todos.length == 0){
        return ;
    }
    todoItemWrapper.id = todos.at(-1).id; // get newest todo

    /**@type {Element} */
    const todoItem = createElementWrapper("li", "todoItem", null);
    /**@type {Element} */
    const todoContent = createElementWrapper("span", "todoContent", input.value);
    /**@type {Element} */
    const doneButton = createElementWrapper("button", "doneButton", statusEnum.DONE);
    doneButton.addEventListener("click", () => doneTodo(todoItemWrapper.id));
    /**@type {Element} */
    const deleteButton = createElementWrapper("button", "deleteButton", statusEnum.DELETED);
    deleteButton.addEventListener("click", () => deleteTodo(todoItemWrapper.id));
    /**@type {Element[]} */
    const elements = [todoItemWrapper, todoItem, todoContent, doneButton, deleteButton];
    if (elements.some(isNullTag)) {
        return ;
    }

    // add todo elms to todoArea by using DOM handle
    todoArea.appendChild(todoItemWrapper);
    todoItemWrapper.appendChild(todoItem);
    todoItem.appendChild(doneButton);
    todoItem.appendChild(todoContent);
    todoItem.appendChild(deleteButton);
    
    input.value = '';
}

/**
 * @description
 *  deleteTodo(deleteId) delete todo object from todos and todoItemWrapper class from DOM 
 * @param {string} deleteId - uuid of todoItem Wraper class
 */
function deleteTodo(deleteId) {
    if (!deleteId) {
        return ;
    }
    /** @type {HTMLDivElement | null} */
    const DeleteItemWrapper = document.getElementById(deleteId);
    /** @type {Number} */
    const hasTodos = todos.length;
    
    if (hasTodos && DeleteItemWrapper) {
        // remove list
        /** @type {Todo[]}*/
        const filteredTodos = todos.filter((currentValue) => {
            return currentValue.id != deleteId;
        });
        todos.length = 0; //clear todos
        todos.push(...filteredTodos);

        // remove DOM element
        DeleteItemWrapper.remove();
    }
}

/**
 * @description
 * check if todoItem.status already has done or not
 * @param {Todo | undefined} todoItem - todo object
 * @returns {boolean}
 */
function isChangeStatusDone(todoItem) {
    /**@type {boolean} */
    const hasStatus = todoItem.hasOwnProperty("status");

    if (hasStatus) {
        todoItem.status = statusEnum.DONE;
    }
    return hasStatus;
}

/**
 * @description
 * doneTodo(doneId) change Todo status to Done and move todoItemWrapper class to DoneArea
 * @param {string} doneId - uuid of todoItem Wrapper class
 */
function doneTodo(doneId) {
    // validation
    if (!doneId) {
        return ;
    }
    /** @type {HTMLDivElement | null} */
    const todoItemWrapper = document.getElementById(doneId);
    /** @type {Number} */
    const hasTodo = todos.length;
    if (!hasTodo || !todoItemWrapper) {
        return ;
    }

    // change todoItem.status to done
    /** @type {Todo | undefined} */
    const toBeDone = todos.find((element) => element.id === doneId);
    /** @type {boolean} */
    const isChanged = isChangeStatusDone(toBeDone);

    // move DOM element
    /**@type {HTMLUListElement | null} */
    const todoArea = document.querySelector(".todoArea");
    /**@type {HTMLUListElement | null} */
    const doneArea = document.querySelector(".doneArea");
    if (!todoArea || !doneArea || !isChanged) {
        return ;
    }
    doneArea.appendChild(todoItemWrapper);
}

document.querySelector(".submitButton").addEventListener("click", createTodo);
