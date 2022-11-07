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
  let index = null;
  switch (action.type) {
    case ACTIONS.ADD:
      draft.push({
        title: action.payload.title,
        id: Math.random(),
        done: false,
      });
      return;
    case ACTIONS.DELETE:
      index = draft.findIndex((todo) => todo.id === action.id);
      if (index !== -1) draft.splice(index, 1);
      break;
    case ACTIONS.TOGGLE:
      index = draft.findIndex((todo) => todo.id === action.id);
      if (index !== -1) draft[index].done = true;
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
