import React, { FC, useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [

]

export const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {

      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const editTodo: EditTodo = editCurrentTodo => {
    const editTodo = todos.map(todo => {
      
      if(todo === editCurrentTodo) {
        return {
          ...todo,
          edit: !todo.edit
        }
      }
      return todo;
    });

    setTodos(editTodo);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false, edit: false }]);
  }

  const deleteTodo: DeleteTodo = currentTodo => {
    setTodos(todos.filter(item => item !== currentTodo));
  }

  const getEditText: GetEditText = getEditedTodo => {
    console.log('getEditText ' + getEditedTodo);
  }

  const saveEditedTodo: SaveEditedTodo = currentTodo => {
    console.log('saveEditedTodo ' + JSON.stringify(currentTodo.text));
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} saveEditedTodo={saveEditedTodo} getEditText={getEditText}/>
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
  )
};
