import { all, call } from 'redux-saga/effects';
import todo from '../todo';

export function* rootSaga() {
  try {
    yield all([call(todo)]);
  } catch (error) {
    console.log(error);
  }
}

export default rootSaga;
