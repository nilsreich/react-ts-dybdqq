import React from 'react';
import { useTodo } from '../context';

export const TodoList = () => {
  const state = useTodo();

  return (
    <ul>
      {state.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
