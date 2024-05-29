"use strict"

/**
 * @description 
 * Enums for todo status <br>
 * <strong>why is status defined as Object?</strong><br>
 * 1. change and add status easily by using Object <br>
 * 2. search easily on editor by using StatusEnum word because this code includes many todoXxx value <br>
 * 3. prevent spell mistake <br>
 * @typedef {Object} StatusEnum
 * @property {string} TODO - Represents a todo status
 * @property {string} DONE - Represents a done status
 * @property {string} DELETED - Represents a deleted status
 * @readonly
 */
const StatusEnum = Object.freeze({
    TODO: "todo",
    DONE: "done",
    DELETED: "deleted"
});

/**
 * todos has todo's content and status value
 * @typedef {Object} Todo - todo object
 * @property {string} id - Todo id (uuid). It is used when change indivisual todo item.
 * @property {string} content - The description of the todo item.
 * @property {StatusEnum} status - todo status that defines statusEnum.
**/
/**@type {Todo[] | []} */
const todos = [];

/**
 * @returns {void}
 * @param {string} id Todo id (uuid).
 * @param {string} inputContent todo content field.
 * @param {StatusEnum} inputStatus todo status filld.
 */
function appendTodos(inputContent, inputStatus) {
    const newTask = {
        id: crypto.randomUUID(),
        content: inputContent,
        status: inputStatus
    }
    todos.push(newTask);
}

/**
 * @todo - add check args statement when tag is falsy
 * @description
 * this function wrap createElement <br>
 * recieve className and innerText as option values <br>
 * createElementWrapper set these params.
 * @param {string} tag - html tag will be created
 * @param {string} className - (option) html class name
 * @param {string} innerText - (option) text content
 * @returns {object} element - createElement result
 */
function createElementWrapper(tag, className, innerText) {
    if (!tag) {
        return ;
    }
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
 * @returns {void}
 */
function createTodo() {
    const input = document.querySelector(".userInput");
    if (!input.value) {
        return ;
    }

    //add todo to todos
    const todoArea = document.querySelector(".todoArea");
    appendTodos(input.value, StatusEnum.TODO);
    
    // create elms
    const todoItemWrapper = createElementWrapper("div", "todoItemWrapper", null);
    if (todos.length)
    {
        todoItemWrapper.id = todos.at(-1).id;
    }

    const todoItem = createElementWrapper("li", "todoItem", null);
    const todoContent = createElementWrapper("span", "todoContent", input.value);

    const doneButton = createElementWrapper("button", "doneButton", StatusEnum.DONE);
    doneButton.addEventListener("click", doneTodo);

    const deleteButton = createElementWrapper("button", "deleteButton", StatusEnum.DELETED);
    deleteButton.addEventListener("click", () => deleteTodo(todoItemWrapper.id));
       
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
        /**
         * @type {Todo[] | []}
         */
        const filteredTodos = todos.filter((currentValue) => {
            return currentValue.id != deleteId;
        });
        todos.length = 0; //clear todos
        todos.push(...filteredTodos);

        DeleteItemWrapper.remove();
    }
}

/**
 * @todo - create doneTodo function
 * @returns {void}
 */
function doneTodo() {
    console.log("doneTodo!")
}

document.querySelector(".submitButton").addEventListener("click", createTodo);