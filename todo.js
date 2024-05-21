"use strict"

/**
 * Enums for todo status
 * @description 
 *     **why is status defined as Object?** <br>
 *     1. change and add status easily by using Object <br>
 *     2. search easily on editor by using StatusEnum word because this code includes many todoXxx value <br>
 *     3. prevent spell mistake <br>
 * @typedef {Object} StatusEnum
 * @property {string} TODO - Represents a todo status
 * @property {string} DONE - Represents a done status
 * @property {string} DELETED - Represents a deleted status
 * @readonly
 */
const StatusEnum = Object.freeze({
    TODO: "todo",
    DONE: "done",
    DELETED: "deleted"
});

/**
 * Todo items array
 * @typedef {Object} Todo - todo object
 * @property {string} id - Todo id (uuid). It is used when change indivisual todo item.
 * @property {StatusEnum} status - todo status that defines statusEnum.
 * @property {string} content - The description of the todo item.
 * todos has todo's content and status value
 * @type {Todo[]}
 *
**/
const todos = [
];

/**
 * @returns {void}
 * @param {string} id Todo id (uuid).
 * @param {StatusEnum} inputStatus todo status filld.
 * @param {string} inputContent todo content field.
 */
function appendTodos(inputContent, inputStatus)
{
    const uuid = crypto.randomUUID();

    todos.push(
        {
            id: uuid,
            status: inputStatus,
            content: inputContent
        }
    );
}

function createElement(tag, className, innerText)
{
    const element = document.createElement(tag);
    if (className)
        element.className = className;
    if (innerText)
        element.innerHTML = innerText;
    return element;
}

function createButton(className, onclickFunc, innerText)
{    
    const button = document.createElement("button");
    if (className)
        button.className = className;
    if (onclickFunc)
        button.onclick = onclickFunc;
    if (innerText)
        button.innerHTML = innerText;
    return button;
}

function createTodo() {
    const input = document.querySelector(".userInput");
    if (!input.value)
        return ;

    //add todo to todos
    const todoArea = document.querySelector(".todoArea");
    appendTodos(input.value, StatusEnum.TODO);
    const current = todos.at(-1);

    // create elms
    const todoItemWrapper = createElement("div", "todoItemWrapper", false);
    const todoItem = createElement("li", "todoItem", false);
    const todoContent = createElement("span", "todoContent", current.content);
    const doneButton = createButton("doneButton", doneTodo, StatusEnum.DONE);
    const deleteButton = createButton("deleteButton", deleteTodo, StatusEnum.DELETED);
   
    // appendChild
    todoArea.appendChild(todoItemWrapper);
    todoItemWrapper.appendChild(todoItem);
    todoItem.appendChild(doneButton);
    todoItem.appendChild(todoContent);
    todoItem.appendChild(deleteButton);
    input.value = '';
}

function deleteTodo() {
    console.log("deleteTodo!");
}

function doneTodo() {
    console.log("doneTodo!")
}