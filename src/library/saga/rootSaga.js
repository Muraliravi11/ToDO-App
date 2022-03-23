import { all, call } from 'redux-saga/effects';
import todo from './todooo';

function* rootSaga() {
  try {
    yield all([call(todo)]);
  } catch (error) {
    console.log(error);
  }
}

export default rootSaga;
