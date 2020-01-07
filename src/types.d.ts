type Todo = {
    text: string;
    complete: boolean;
    edit: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type DeleteTodo = (currentTodo: Todo) => void;

type EditTodo = (editCurrentTodo: Todo) => void;

type GetEditText = (getEditedTodo: string) => void;

type SaveEditedTodo = (saveEditedTodo: Todo) => void;