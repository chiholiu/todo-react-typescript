import React, { FC, useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { TodoFilter } from "./TodoFilter";
import { AddTodoForm } from "./AddTodoForm";


const initialTodos: Array<Todo> = []

let id = 0;

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
    newTodo.trim() !== "" &&  setTodos([...todos, {id: id++, text: newTodo, complete: false, edit: false }]);
  }

  const deleteTodo: DeleteTodo = currentTodo => {
    setTodos(todos.filter(item => item !== currentTodo));
  }

  const getEditText: GetEditText = (todoId, getEditedTodo)=> {
    const editTodo = todos.map(todo => {

      if(todo.id === todoId) {
        return {
          ...todo,
          text: getEditedTodo,
          edit: true
        }
      }
      return todo;
    });

    setTodos(editTodo);
  }

  const saveEditedTodo: SaveEditedTodo = currentTodo => {
    const saveEditedTodo = todos.map(todo => {

      if(todo.id === currentTodo.id) {
        return {
          ...todo,
          edit: false
        }
      }
      return todo
    });

    setTodos(saveEditedTodo);
  }

  const currentFilter: CurrentFilter = filterTodo => {
    let activeFilter = filterTodo;
    switch (activeFilter) {
      case 'All':
        console.log(todos);
        return todos;
      case 'Complete':
        console.log(todos.filter(t => t.complete));
        return todos.filter(t => t.complete);
      case 'Incomplete':
        console.log(todos.filter(t => !t.complete));
        return todos.filter(t => !t.complete);
       default:
        console.log('Default');
    }
  }

  console.log(currentFilter);
  return (
    <React.Fragment>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
        saveEditedTodo={saveEditedTodo} 
        getEditText={getEditText}
        currentFilter={currentFilter}
      />
      <TodoFilter currentFilter={currentFilter}/>
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
  )
};
