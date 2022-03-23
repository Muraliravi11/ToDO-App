import { call, put, takeEvery } from 'redux-saga/effects';
import { getTodoRequest } from '../../api';
import * as actionTypes from '../../store/todo/action-types';

export function* fetchTodo() {
  const response = yield call(getTodoRequest());
  const { data } = response;
  console.log(data);
}

function* watchSaga() {
  yield takeEvery(actionTypes.FETCH_TODO, fetchTodo);
}

export default watchSaga;
