import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
