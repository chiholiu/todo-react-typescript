import React from 'react';

interface TodoFilter {
    currentFilter: CurrentFilter;
}

export const TodoFilter: React.FC<TodoFilter> = ({ currentFilter }) => {
    return (
        <div>
            <button onClick={() => currentFilter('All')}>All</button>
            <button onClick={() => currentFilter('Complete')}>Complete</button>
            <button onClick={() => currentFilter('Incomplete')}>Incomplete</button>
        </div>
    )
}