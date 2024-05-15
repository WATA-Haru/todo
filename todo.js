"use strict"

//// create dot sample by using DOM
///**
// * create <p></p> tag in todo section
// * @returns {void}
// */
//function create_todo()
//{
//    /**
//     * @param {Object} todo_field - section tag for todo fileld
//     * @param {Object} todo - the todo to be added
//     * @param {Object} content - the content text fileld
//     * 
//     */
//    const todo_field = document.querySelector("section");
//    const todo = document.createElement("p");
//    todo_field.appendChild(todo);
//    const content = document.createTextNode( 
//        "create todo test!"
//    );
//    todo.appendChild(content)
//}

function create_todo()
{
    const input = document.getElementById("user_input");
    const todo_field = document.getElementById("todo_field");

    const todo = document.createElement("p");
    todo_field.appendChild(todo);
    const content = document.createTextNode(
        `${input.value}`
    );
    todo.appendChild(content);
    input.value = '';
}

const submit_button = document.getElementById("submit_button");
submit_button.addEventListener('click', create_todo);