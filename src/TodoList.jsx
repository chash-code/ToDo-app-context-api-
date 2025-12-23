import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  // Read todos array from context
  const { todos } = useContext(TodoContext);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: '0', color: '#555' }}>
        Todo List ({todos.length} items)
      </h2>
      
      {todos.length === 0 ? (
        <p style={{
          textAlign: 'center',
          color: '#999',
          padding: '20px',
          fontStyle: 'italic'
        }}>
          No todos yet. Add one above! 🎯
        </p>
      ) : (
        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
