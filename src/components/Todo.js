import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import { fetchTodo } from './../library/store/todo/action';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo);
  }, []);

  return (
    <>
      <TodoList />
      <AddTodoForm />
    </>
  );
};

export default Todo;
