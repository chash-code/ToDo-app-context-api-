import React from 'react';
import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <TodoProvider>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '30px'
        }}>
          📝 Todo Application
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '20px'
        }}>
          Built with Context API - No Props Drilling!
        </p>
        
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Todos;
