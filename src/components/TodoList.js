import React, { memo } from 'react';

const TodoList = ({ todoList }) => {
  console.log(todoList);
  return (
    <ul>
      {todoList?.length > 0 &&
        todoList?.map(({ id, task }) => <li key={id}>{task}</li>)}
    </ul>
  );
};

export default memo(TodoList);
