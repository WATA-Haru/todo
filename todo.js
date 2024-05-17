"use strict"

function create_todo() {
    const input = document.querySelector(".user_input");
    if (!input.value)
        return ;
    const todo_area = document.querySelector(".todo_area");
    //const todo_area = document.querySelector("ul"); //ok
    //const todo_area = document.getElementByClass("hoge"); // bug occurs
    
    const todo_item = document.createElement("li");

    //TODO: render
    //const todo_item = renderTodo(input);
    todo_item.innerHTML = `${input.value}`;
    todo_area.appendChild(todo_item);
    input.value = '';
}
