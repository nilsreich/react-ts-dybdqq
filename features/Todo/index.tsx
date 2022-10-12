import React from 'react';
import { TodoProvider, useTodo } from './context';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

export const Todo = () => {
  const state = useTodo();
  return (
    <TodoProvider>
      <TodoAdd />
      <TodoList />
    </TodoProvider>
  );
};
