"use strict"

/**
 * Enums for todo status
 * @readonly
 * @enum {string}
 */
const StatusEnum = Object.freeze({
    TODO: "todo",
    DONE: "done",
    DELETED: "deleted"
});

/**
 * check if input_status is valid or not by using StatusEnum
 * @param {string} input_status -the input status.
 * @returns {boolean} True if the status is valid, otherwise false.
 */
function is_valid_status(input_status)
{
    return Object.values(StatusEnum).includes(input_status);
}

/**
 * Todo items json
 * @typedef {Object} Todo
 * @property {string} id - Todo id (uuid). It is used when change indivisual todo item.
 * @property {StatusEnum} status - todo status that defines statusEnum.
 * @property {string} content - The description of the todo item.
 */
/**
 * todos has todo's content and status value
 * @type {Todo[]}
 */
const todos = [
];

/**
 * @returns {void}
 * @param {string} id Todo id (uuid).
 * @param {string} input_value todo content field.
 * @param {StatusEnum} input_status todo status filld.
 */
function append_todos(input_value, input_status)
{
    const uuid = crypto.randomUUID();

    if (!is_valid_status(input_status))
        throw new Error("Invalid status. Valid statuses are: 'todo', 'done', 'deleted'.");
    todos.push(
        {
            id: uuid,
            status: input_status,
            content: input_value
        }
    )
}

function create_element(tag, classname, innerText)
{
    const element = document.createElement(tag);
    if (classname)
        element.className = classname;
    if (innerText)
        element.innerHTML = innerText;
    return element;
}

function create_button(classname, onclick_func, innerText)
{    
    const button = document.createElement("button");
    if (classname)
        button.className = classname;
    if (onclick_func)
        button.onclick = onclick_func;
    if (innerText)
        button.innerHTML = innerText;
    return button;
}

function create_todo() {
    const input = document.querySelector(".user_input");
    if (!input.value)
        return ;

    //add todo to todos
    const todo_area = document.querySelector(".todo_area");
    append_todos(input.value, StatusEnum.TODO);
    const current = todos.at(-1);

    // create elms
    const todo_item_wrapper = create_element("div", "todo_item_wrapper", false);
    const todo_item = create_element("li", "todo_item", false);
    const todo_content = create_element("span", "todo_content", current.content);
    const done_button = create_button("done_button", done_todo, StatusEnum.DONE);
    const delete_button = create_button("delete_button", delete_todo, StatusEnum.DELETED);
   
    // appendChild
    todo_area.appendChild(todo_item_wrapper);
    todo_item_wrapper.appendChild(todo_item);
    todo_item.appendChild(done_button);
    todo_item.appendChild(todo_content);
    todo_item.appendChild(delete_button);
    input.value = '';
}

function delete_todo() {
    console.log("delete_todo!");
}

function done_todo() {
    console.log("done_todo!")
}