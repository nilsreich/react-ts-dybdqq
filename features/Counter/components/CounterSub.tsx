import React from 'react';
import { ACTIONS, useCounterDispatch } from '../context/CounterContext';

export const CounterSub = () => {
  const dispatch = useCounterDispatch();

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return <button onClick={decrement}>-</button>;
};
