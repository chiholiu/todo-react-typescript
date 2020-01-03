import React from 'react';
import { TodoListItem } from "./TodoListItems"; 

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map((todo, i) => {
                return <TodoListItem key={i} todo={todo} toggleTodo={toggleTodo}/>
            })}
        </ul>
    )
}