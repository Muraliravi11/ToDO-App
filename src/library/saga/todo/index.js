import { call, put, takeLatest } from 'redux-saga/effects';
import { getTodoRequest } from '../../api';
import * as actionTypes from '../../store/todo/action-types';
import { setTodo } from '../../store/todo/action';

export function* fetchTodo() {
  try {
    const response = yield call(getTodoRequest);
    const { data } = response;
    // console.log(data);
    yield put(setTodo(data));
  } catch (error) {
    console.log(error);
  }
}

function* watchSaga() {
  yield takeLatest(actionTypes.FETCH_TODO, fetchTodo);
}

export default watchSaga;
