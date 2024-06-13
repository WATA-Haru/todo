"use strict"
import { statusEnum } from "../statusEnum/statusEnum.js";

/**
 * @description
 * doneTodo(doneId) change Todo status to Done and move todoItemWrapper class to DoneArea
 * @param {Todo[]} - todo object list
 * @param {string | null} doneId - uuid of todoItem Wrapper class
 */
export function doneTodo(todos, doneId) {
    // args check
    /** @type {Number} */
	const hasTodo = todos.length;
    if (!hasTodo || !doneId) {
        return ;
    }

    // save original status
    /**@type {Todo | undefined} */
    const toBeDone = todos.find((element) => element.id === doneId);
    /**@type {string} */
    const saveStatus = toBeDone?.status;
    if (!toBeDone)
        return ;

    // change todo item status
    /**@type {boolean} */
	const isChanged = isChangeStatusDone(toBeDone);
    // chnage DOM, if DOM failed, undo todoItem status
    if (isChanged && haveChangedDoneDOM(toBeDone) === false)
        toBeDone.status = saveStatus;
}

/**
 * @description
 * check todoItem is Todo Object or not, then change it status Done
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
 * move todoItemWrapper DOM to doneArea from todoArea
 * @param {Todo | undefined} todoItem 
 * @returns {boolean} 
 */
function haveChangedDoneDOM(todoItem)
{
    const hasId = Object.hasOwn(todoItem, "id");
    if (!hasId)
        return false;

    /** @type {HTMLDivElement | null} */
    const todoItemWrapper = document.getElementById(todoItem.id);
    /**@type {HTMLUListElement | null} */
    const doneArea = document.querySelector(".doneArea");
    if (!todoItemWrapper || !doneArea) {
        return false;
    }

    doneArea.appendChild(todoItemWrapper);
}