import React from 'react';
import { useTodo } from '../context';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const state = useTodo();

  return (
    <ul>
      {state.map((item) => (
        <TodoItem key={item.key} item={item} />
      ))}
    </ul>
  );
};
