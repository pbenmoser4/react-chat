import messages from '../api/messages';

import {
  LOGIN,
  LOGOUT,
  CREATE_MESSAGE,
  GET_MESSAGES
} from './types';

export const createMessage = (formValues, timestamp) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await messages.post('/messages', {...formValues, userId, timestamp});

  // NOTE dispatch only called when the async function returns
  dispatch({ type: CREATE_MESSAGE, payload: response.data });
}

export const getMessages = () => async (dispatch, getState) => {
  // TODO use the currently logged in user to selectively download messages
  // get the userId of the currently logged in user
  // const { userId } = getState().auth;
  const response = await messages.get('/messages');

  dispatch({ type: GET_MESSAGES, payload: response.data });
}

export const login = (userId) => {
  return {
    type: LOGIN,
    payload: userId
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}
