import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const AddTodo = () => {
  // Local state only for the input field value
  const [inputValue, setInputValue] = useState('');
  
  // Read addTodo function from context
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') {
      alert('Please enter a todo title!');
      return;
    }

    // Add the new todo to global context
    addTodo(inputValue);
    
    // Clear the input field
    setInputValue('');
  };

  return (
    <div style={{
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: '0', color: '#555' }}>Add New Todo</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter todo title..."
          style={{
            flex: '1',
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '4px',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
