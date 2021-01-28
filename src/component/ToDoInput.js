import React, { useCallback, useState } from 'react';
import './ToDo.css';
import { MdAdd } from 'react-icons/md';

const ToDoInput = ({ onInsert }) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      onInsert(text);
      setText('');
      e.preventDefault();
    },
    [onInsert, text],
  );

  return (
    <div>
      <form className="ToDoInput" onSubmit={onSubmit}>
        <input
          placeholder=" 할 일을 입력한 후, 버튼을 눌러 추가하세요."
          value={text}
          onChange={onChange}
        ></input>
        <button type="submit">
          <MdAdd size="" />
        </button>
      </form>
    </div>
  );
};

export default ToDoInput;
