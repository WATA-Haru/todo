import { statusEnum }  from '../../statusEnum/statusEnum.js';

/**
 * @description
 * check if todoItem.status is todo or not
 * @param {Todo | undefined} todoItem checked todo object
 * @return {boolean}
*/
export function isStatusTodo(todoItem) {
    return todoItem?.status === statusEnum.TODO;
}