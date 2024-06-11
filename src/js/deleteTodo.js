import { statusEnum } from "./statusEnum.js"

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
	return ;
}
