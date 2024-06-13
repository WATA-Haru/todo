"use strict"
import { statusEnum } from "../statusEnum/statusEnum.js";

/**
* @param {string} inputContent todo content field.
* @param {statusEnum} inputStatus todo status filld.
*/
export function appendTodos(todos, inputContent, inputStatus) {
   /**@type {Todo}*/
   const newTask = {
       id: crypto.randomUUID(),
       content: inputContent,
       status: inputStatus
   }
   todos.push(newTask);
}

