import React from 'react';

interface TodoListFilter {
    currentFilter: CurrentFilter;
}

export const TodoFilter: React.FC<TodoListFilter> = ({ currentFilter }) => {
    return (
        <ul>
            Filter
            <li onClick={() => currentFilter('All')}>All</li>
            <li onClick={() => currentFilter('Complete')}>Completed</li>
            <li onClick={() => currentFilter('Incomplete')}>Incompleted</li>
        </ul>
    )
}