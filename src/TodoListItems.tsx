import React from 'react';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return <li>
            <label className={todo.complete ? "complete" : undefined }>
                <input type="checkbox" checked={todo.complete} 
                    onChange={() => toggleTodo(todo)} 
                />
                {todo.text}
            </label>
            <span onClick={() => deleteTodo(todo)}>Remove</span>
        </li>;
};