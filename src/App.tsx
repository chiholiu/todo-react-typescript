import React, { FC } from "react";
import "./App.css";
import { TodoListItem } from "./TodoListItems";

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false }
]

export const App: React.FC = () => {
  return <TodoListItem todo={todos[0]}/>
};
