import { combineReducers } from 'redux';
import { reducer as todo } from './todo/reducer';

export default combineReducers({
  todo,
});
