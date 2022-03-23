import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import rootSaga from '../saga/todo';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const getStoreEnhancer = () => applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, getStoreEnhancer());

sagaMiddleware.run(rootSaga);

export default store;
