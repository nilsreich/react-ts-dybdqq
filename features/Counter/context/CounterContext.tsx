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
  USERNAME: 'username',
};

// Reducer
const reducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.RANDOM:
      draft.number = Math.random();
      break;
    case ACTIONS.INCREMENT:
      draft.count++;
      break;
    case ACTIONS.DECREMENT:
      draft.count--;
      break;
    case ACTIONS.USERNAME:
      draft.name = action.payload.name;
      break;
  }
};
export const CounterProvider = ({ children }) => {
  //create ImmerReducer
  const [state, dispatch] = useImmerReducer(reducer, {
    count: 0,
    number: 0,
    name: 'nils',
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
