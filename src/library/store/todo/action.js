import * as actionTypes from './action-types';

export const addTodo = () => ({
  type: actionTypes.ADD_TODO,
  payload,
});
export const fetchTodo = () => ({
  type: actionTypes.FETCH_TODO,
});
export const completeTodo = () => ({
  type: actionTypes.COMPLETE_TODO,
  payload,
});
