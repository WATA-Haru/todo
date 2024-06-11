import { statusEnum } from "./statusEnum.js"
import { appendTodos } from "./utils.js"
import { deleteTodo } from "./deleteTodo.js"
import { doneTodo } from "./doneTodo.js"

/**
 * 
 * @param {TODO[]} todos -todo object lists
 * @returns {void}
 */
export function createTodo(todos) {
	// add input to todos
	/**@type {Element | null} */
	const input = document.querySelector(".userInput");
	if (!input) {
		return ;
	}
	appendTodos(todos, input.value, statusEnum.TODO);
	if (todos.length == 0){
		return ;
	}
	/**@type {Todo} */
	const currentTodo = todos.at(-1);
	input.value = "";
	
	appendTodoDOM(todos, currentTodo);
	return ;
}

/**
 * @description
 * this function wrap createElement <br>
 * recieve className and innerText as option values <br>
 * createElementWrapper set these params.
 * @param {string} tag - html tag will be created
 * @param {string | null} className - (option) html class name
 * @param {string | null} innerText - (option) text content
 * @returns {Element} element - createElement result
 */
function createElementWrapper(tag, className = null, innerText = null) {
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
 * 
 * @param {Todo[]} todos -todo objects list
 * @param {Todo | undefined} currentTodo -current todo object
 * @returns {void}
 */
function appendTodoDOM(todos, currentTodo)
{
    /** @type {Number} */
	const hasTodo = todos.length;
    /** @type {boolean} */
    const hasStatus = Object.hasOwn(currentTodo, "status");
    
    if (!hasTodo || !hasStatus) {
		return ;
	}
	/**@type {Element} */
	const todoArea = document.querySelector(".todoArea");
	if (!todoArea) {
		return ;
	}
	/**@type {Element} */
	const todoItemWrapper = createElementWrapper("div", "todoItemWrapper", null);
	todoItemWrapper.id = currentTodo.id;
	/**@type {Element} */
	const todoItem = createElementWrapper("li", "todoItem", null);
	/**@type {Element} */
	const todoContent = createElementWrapper("span", "todoContent", currentTodo.content);
	/**@type {Element} */
	const doneButton = createElementWrapper("button", "doneButton", statusEnum.DONE);
	doneButton.addEventListener("click", () => doneTodo(todos, todoItemWrapper.id));
	/**@type {Element} */
	const deleteButton = createElementWrapper("button", "deleteButton", statusEnum.DELETED);
	deleteButton.addEventListener("click", () => deleteTodo(todos, todoItemWrapper.id));

	// add todo elms to todoArea by using DOM handle
	todoArea.appendChild(todoItemWrapper);
	todoItemWrapper.appendChild(todoItem);
	todoItem.appendChild(doneButton);
	todoItem.appendChild(todoContent);
	todoItem.appendChild(deleteButton);
    return ;
}
