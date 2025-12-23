import React, { createContext, useState } from 'react';

// Create the Todo Context
export const TodoContext = createContext();

// Todo Context Provider Component
export const TodoProvider = ({ children }) => {
  // State to store todos (array of todo objects)
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React Context API' },
    { id: 2, title: 'Build a Todo App' },
    { id: 3, title: 'Master State Management' }
  ]);

  // Function to add a new todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID using timestamp
      title: title
    };
    setTodos([...todos, newTodo]);
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Context value containing state and functions
  const contextValue = {
    todos,
    addTodo,
    deleteTodo
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};
