import React from 'react';
import { ACTIONS, useTodoDispatch } from '../context';

export const TodoItem = ({ item }) => {
  const dispatch = useTodoDispatch();

  const toggle = (item) => {
    dispatch({ type: ACTIONS.TOGGLE, id: item.id });
  };

  const remove = (item) => {
    dispatch({ type: ACTIONS.DELETE, id: item.id });
  };

  return (
    <li>
      <span
        style={{ textDecoration: item.done ? 'line-through' : '' }}
        onClick={() => toggle(item)}
      >
        {item.title}
      </span>
      <button onClick={() => remove(item)}>rem</button>
    </li>
  );
};
