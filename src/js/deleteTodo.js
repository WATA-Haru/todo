import { statusEnum } from "./statusEnum.js"

/**
 * @description
 *  deleteTodo(deleteId) delete todo object from todos and todoItemWrapper class from DOM 
 * @param {string} deleteId - uuid of todoItem Wraper class
 */
export function deleteTodo(todos, deleteId) {
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
