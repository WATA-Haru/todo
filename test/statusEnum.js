"use strict"

/**
 * @description 
 * Enums for todo status <br>
 * <strong>why is status defined as Object?</strong><br>
 * 1. change and add status easily by using Object <br>
 * 2. search easily on editor by using statusEnum word because this code includes many todoXxx value <br>
 * 3. prevent spell mistake <br>
 * @typedef {Object} statusEnum
 * @property {string} TODO - Represents a todo status
 * @property {string} DONE - Represents a done status
 * @property {string} DELETED - Represents a deleted status
 * @readonly
 */
const statusEnum = Object.freeze({
    TODO: "todo",
    DONE: "done",
    DELETED: "deleted"
});

module.exports = {
    statusEnum
};