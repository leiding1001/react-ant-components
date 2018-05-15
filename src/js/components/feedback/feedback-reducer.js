import {combineReducers} from 'redux';

import {ADD_MESSAGE, CLEAR_MESSAGE, SHOW_MODAL} from './feedback-action';

const rootReducers = combineReducers({
  messageInfo,
  modalInfo
});

export default function root(state, action) {
  return rootReducers(state, action);
}


export function messageInfo(state = null, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return action.data;
    case CLEAR_MESSAGE:
      return null;
    default:
      return state;
  }
}

export function modalInfo(state = null, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.data;
    default:
      return state;
  }
}