import "./style.css";

import { Todo, TodoList } from "./classes";
import { crearHTML } from "./js/components";

export const todoList = new TodoList();

todoList.todos.forEach((todo) => crearHTML(todo));

console.log(todoList.todos);
