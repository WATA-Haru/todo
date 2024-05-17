"use strict"

//todo, done, deletedで管理する。ゆくゆくはenumでTODO.todoや、TODO.deletedみたいな感じでtodo, done, deleted以外の名前を入れられないようにしたい
const todos = [];

function add_todo_to_todos(input_value, status) {
    todos.push(
        {
            status: status,
            content: input_value
        }
    )
}

function renderTodo(content)
{
     return `<li class="todo_item">
                <button class="is_done">check</button>
                ${content}
                <button class="is_deleted">del</button>
            </li>`
}

// event on click
function create_todo() {
    const input = document.querySelector(".user_input");
    if (!input.value)
        return ;
    const todo_area = document.querySelector(".todo_area");
    add_todo_to_todos(input.value, "todo");// TODO: user enum

    let current = todos.at(-1).content;
    const todo_item = document.createElement("div");
    const todo_item_html = renderTodo(current);
    
    todo_item.innerHTML = todo_item_html;
    todo_area.appendChild(todo_item);
    input.value = '';
}

//function create_todo() {
//    const input = document.querySelector(".user_input");
//    if (!input.value)
//        return ;
//    const todo_area = document.querySelector(".todo_area");
//    //const todo_area = document.querySelector("ul"); //ok
//    //const todo_area = document.getElementByClass("hoge"); // bug occurs
//    
//    const todo_item = document.createElement("li");
//
//    todo_item.innerHTML = `${input.value}`;
//    todo_area.appendChild(todo_item);
//    input.value = '';
//}
