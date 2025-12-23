import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo }) => {
  // Read deleteTodo function from context
  const { deleteTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      transition: 'all 0.2s'
    }}>
      <div style={{ flex: '1' }}>
        <h4 style={{
          margin: '0',
          color: '#333',
          fontSize: '16px'
        }}>
          {todo.title}
        </h4>
      </div>
      
      <button
        onClick={handleDelete}
        style={{
          padding: '8px 16px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
