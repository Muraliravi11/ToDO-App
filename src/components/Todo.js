import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import { fetchTodo } from './../library/store/todo/action';

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <>
      <TodoList todoList={todoList} />
      <AddTodoForm />
    </>
  );
};

export default Todo;
