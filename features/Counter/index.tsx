import React from 'react';
import { CounterAdd } from './components/CounterAdd';
import { CounterDisplay } from './components/CounterDisplay';
import { CounterProvider } from './context/CounterContext';
import { CounterSub } from './components/CounterSub';

export const Counter = () => {
  return (
    <div>
      <CounterProvider>
        <CounterAdd />
        <CounterDisplay />
        <CounterSub />
      </CounterProvider>
    </div>
  );
};
