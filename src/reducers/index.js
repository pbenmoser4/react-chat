import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import messagesReducer from './messagesReducer';

import { CREATE_MESSAGE } from '../actions/types';
import { CHAT_FORM } from '../components/constants';

export default combineReducers({
  form: formReducer.plugin({
    CHAT_FORM: (state, action) => {
      switch (action.type) {
        case CREATE_MESSAGE:
          return undefined;
        default:
          return state;
      }
    }
  }),
  auth: authReducer,
  messages: messagesReducer
});
