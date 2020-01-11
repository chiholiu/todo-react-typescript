import React, { FC, useState, useReducer, useEffect } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import { TodoFilter } from './TodoFilter';

const initialTodos: Array<Todo> = []

let id = 0;

export const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filtered, setFiltered] = useState(initialTodos);

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

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

  const currentFilter: CurrentFilter = (filteredTodo) => {
    switch(filteredTodo) {
      case 'All':
        setFiltered(todos);
        break;
      case 'Complete':
        setFiltered(todos.filter(t => t.complete));
        break;
      case 'Incomplete':
        setFiltered(todos.filter(t => !t.complete));
        break;
      default:
        console.log('default fallback currentFilter');
        break;
    }
  }

  console.log(filtered);

  return (
    <React.Fragment>
      <TodoList 
        todos={filtered} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
        saveEditedTodo={saveEditedTodo} 
        getEditText={getEditText}
      />
      <TodoFilter currentFilter={currentFilter}/>
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>
  )
};
