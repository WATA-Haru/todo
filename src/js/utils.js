"use strict"
import { statusEnum } from "./statusEnum.js";

/**
 * @description
 * check if todoItem.status is done or not
 * @param {Todo | undefined} todoItem checked todo object
 * @return {boolean}
*/
export function isStatusDone(todoItem) {
    return todoItem?.status === statusEnum.DONE;
}

/**
 * @description
 * check if todoItem.status is deleted or not
 * @param {Todo | undefined} todoItem checked todo object
 * @return {boolean}
*/
export function isStatusDeleted(todoItem) {
    return todoItem?.status === statusEnum.DELETED;
}
/**
 * @description
 * check if todoItem.status is todo or not
 * @param {Todo | undefined} todoItem checked todo object
 * @return {boolean}
*/
export function isStatusTodo(todoItem) {
    return todoItem?.status === statusEnum.TODO;
}
