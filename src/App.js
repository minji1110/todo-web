import React, { useRef, useState } from 'react';
import ToDoContainer from './component/ToDoContainer';
import ToDoInput from './component/ToDoInput';
import ToDoList from './component/ToDoList';

const App = () => {
  const [list, setList] = useState([
    { id: 1, text: '리액트를 다루는 기술 공부하기', checked: true },
    { id: 2, text: '알고리즘 3문제 풀기', checked: false },
    { id: 3, text: '리팩터링 읽고 정리하기', checked: false },
    { id: 4, text: '책읽기 30분', checked: true },
    { id: 5, text: '물 1L 이상 마시기', checked: false },
  ]);

  const nextId = useRef(6);

  const onInsert = (text) => {
    const newToDo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    setList(list.concat(newToDo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <ToDoContainer>
      <ToDoInput onInsert={onInsert} />
      <ToDoList list={list} onRemove={onRemove} onToggle={onToggle} />
    </ToDoContainer>
  );
};

export default App;
