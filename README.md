# ToDo-app-context-api-
global state-driven Todo application built with React Context API instead of props or lifting state up.

## Project Structure
├── src/
│   ├── App.js
│   ├── TodoContext.js
│   ├── Todos.jsx
│   ├── AddTodo.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
├── package.json
└── README.md
## Features

- ✅ Add new todos
- ✅ Delete todos
- ✅ Global state management with Context API
- ✅ No prop drilling
- ✅ Clean component separation

## Rules Followed

- ❌ No props passed between components
- ✅ All data comes from Context API
- ✅ No state inside AddTodo, TodoList, or TodoItem
- ✅ Only the context provider manages state

## How to Run

```bash
npm install
npm start
