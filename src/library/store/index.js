import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const getStoreEnhancer = () => applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer);

export default store;
