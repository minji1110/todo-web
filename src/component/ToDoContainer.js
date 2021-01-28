import React from 'react';
import './ToDo.css';

const ToDoContainer = ({ children }) => {
  return (
    <div className="ToDoContainer">
      <div className="container-title">To Do List</div>
      <div className="container-content"> {children}</div>
    </div>
  );
};

export default ToDoContainer;
