import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

//Create Context
export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

// Actions for dispatcher
export const ACTIONS = {
  ADD: 'add',
  DELETE: 'delete',
  TOGGLE: 'toggle',
};

// Reducer
const reducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      draft.push({
        title: action.payload.title,
        id: Math.random(),
        done: false,
      });
      return;
    case ACTIONS.DELETE:
      draft.count++;
      break;
    case ACTIONS.TOGGLE:
      const item = draft.find((item) => item.id === action.payload.id);
      item.done = !item.done;
      break;
  }
};
export const TodoProvider = ({ children }) => {
  //create ImmerReducer
  const [state, dispatch] = useImmerReducer(reducer, [
    {
      title: 'mano',
      id: 0,
      done: false,
    },
  ]);
  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodo() {
  return useContext(TodoContext);
}
