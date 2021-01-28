import React from 'react';
import './ToDo.css';
import ToDoItem from './ToDoItem';

const ToDoList = ({ list, onRemove, onToggle }) => {
  return (
    <div className="ToDoList">
      {list.map((todo) => (
        <ToDoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default ToDoList;
