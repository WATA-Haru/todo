import { statusEnum }  from '../../statusEnum/statusEnum.js';

/**
 * @description
 * check if todoItem.status is deleted or not
 * @param {Todo | undefined} todoItem checked todo object
 * @return {boolean}
*/
export function isStatusDeleted(todoItem) {
    return todoItem?.status === statusEnum.DELETED;
}
