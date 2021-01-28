import React from 'react';
import './ToDo.css';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDeleteForever,
} from 'react-icons/md';

const ToDoItem = ({ todo, onRemove, onToggle }) => {
  return (
    <div className="ToDoItem">
      <div className="check-box" onClick={() => onToggle(todo.id)}>
        {todo.checked ? (
          <MdCheckBox size="25" color="darkslategray" />
        ) : (
          <MdCheckBoxOutlineBlank size="25" />
        )}
        <div className="item-text">{todo.text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(todo.id)}>
        <MdDeleteForever size="25" color="grey" />
      </div>
    </div>
  );
};

export default ToDoItem;
