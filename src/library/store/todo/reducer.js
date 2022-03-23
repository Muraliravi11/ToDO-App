import * as actionTypes from './action-types';

const initialState = null;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TODO:
      const { todo } = action;
      return { ...state, todo };
    default:
      return state;
  }
};
