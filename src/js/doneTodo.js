import { statusEnum } from "./statusEnum.js";

/**
 * @description
 * check if todoItem.status already has done or not
 * @param {Todo | undefined} todoItem - todo object
 * @returns {boolean}
 */
function isChangeStatusDone(todoItem) {
    /**@type {boolean} */
    const hasStatus = Object.hasOwn(todoItem, "status");

    if (hasStatus) {
        todoItem.status = statusEnum.DONE;
    }
    return hasStatus;
}

/**
 * @description
 * doneTodo(doneId) change Todo status to Done and move todoItemWrapper class to DoneArea
 * @param {Todo[]} - todo object list
 * @param {string | null} doneId - uuid of todoItem Wrapper class
 */
export function doneTodo(todos, doneId) {
    /** @type {Number} */
	const hasTodo = todos.length;
    if (!hasTodo || !doneId) {
        return ;
    }
    /** @type {HTMLDivElement | null} */
    const todoItemWrapper = document.getElementById(doneId);
    /** @type {Number} */
    if (!todoItemWrapper) {
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
