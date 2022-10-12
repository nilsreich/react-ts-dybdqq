import { ACTIONS, useCounterDispatch } from '../context/CounterContext';
import React from 'react';

export const CounterAdd = () => {
  const dispatch = useCounterDispatch();
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return <button onClick={increment}>+</button>;
};
