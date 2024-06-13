import { statusEnum }  from '../../statusEnum/statusEnum.js';

/**
 * @description
 * check if todoItem.status is done or not
 * @param {Todo | undefined} todoItem checked todo object
 * @return {boolean}
*/
export function isStatusDone(todoItem) {
    return todoItem?.status === statusEnum.DONE;
}
