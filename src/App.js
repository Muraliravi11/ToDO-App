import React from 'react';
import './style.css';

import { Provider } from 'react-redux';
import store from './library/store';

import Todo from './components/Todo';
export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
