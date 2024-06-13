"use strict"
import { statusEnum } from "../statusEnum/statusEnum.js"

/**
 * @description
 *  deleteTodo(deleteId) delete todo object from todos and todoItemWrapper class from DOM 
 * @param {Todo[]} todos- todo object list 
 * @param {string | null} deleteId - uuid of todoItem Wraper class
 * @returns {void}
 */
export function deleteTodo(todos, deleteId) {
    /** @type {Number} */
	const hasTodo = todos.length;
    if (!hasTodo || !deleteId) {
        return ;
    }
    /** @type {HTMLDivElement | null} */
    const DeleteItemWrapper = document.getElementById(deleteId);
    
    if (DeleteItemWrapper) {
		deleteTodoFromList(todos, deleteId);
        DeleteItemWrapper.remove();
    }
	return ;
}

/**
 * 
 *  @description
 *  deleteTodo(deleteId) Mutable function. delete object from todos by deleteId
 * @param {Todo[]} todos- todo object list 
 * @param {string | null} deleteId - uuid of todoItem Wraper class
 * @returns {void}
 */
function deleteTodoFromList(todos, deleteId)
{
    /** @type {Number} */
	const hasTodo = todos.length;
	if (!hasTodo || deleteId)
		return ;

	/** @type {Todo[]}*/
	const filteredTodos = todos.filter((currentValue) => {
		return currentValue.id != deleteId;
	});
	todos.length = 0; //clear todos
	todos.push(...filteredTodos);
	return ;
}