"use strict"
import { statusEnum } from "./statusEnum.js";
import { createTodo } from "./createTodo.js";

/**
 * todos has todo's content and status value
 * @typedef {Object} Todo - todo object
 * @property {string} id - Todo id (uuid). It is used when change indivisual todo item.
 * @property {string} content - The description of the todo item.
 * @property {statusEnum} status - todo status that defines statusEnum.
**/
/** @type {Todo[]} */
const todos = [];

document.querySelector(".submitButton").addEventListener("click", () => createTodo(todos));
