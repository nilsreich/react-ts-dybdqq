import React, { useState } from 'react';
import { useTodoDispatch, ACTIONS } from '../context';

export const TodoAdd = () => {
  const dispatch = useTodoDispatch();

  const [title, setTitle] = useState('');
  const add = () => {
    dispatch({ type: ACTIONS.ADD, payload: { title: title } });
    setTitle('');
  };
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={add}>add Todo</button>
    </div>
  );
};
