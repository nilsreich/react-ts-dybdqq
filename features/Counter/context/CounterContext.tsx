import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

//Create Context
export const CounterContext = createContext(null);
export const CounterDispatchContext = createContext(null);

// Actions for dispatcher
export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RANDOM: 'random',
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.RANDOM:
      state.number = Math.random();
      break;
    case ACTIONS.INCREMENT:
      state.count++;
      break;
    case ACTIONS.DECREMENT:
      state.count--;
      break;
  }
};
export const CounterProvider = ({ children }) => {
  //create ImmerReducer
  const [state, dispatch] = useImmerReducer(reducer, {
    count: 0,
  });
  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

export function useCounterDispatch() {
  return useContext(CounterDispatchContext);
}

export function useCounter() {
  return useContext(CounterContext);
}
