import _ from 'lodash';

import {
  CREATE_MESSAGE,
  GET_MESSAGES
} from "../actions/types";

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_MESSAGE:
      console.log("I'M CREATING A NEW MESSAGE");
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case GET_MESSAGES:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      }
    default:
      return state
  }
}
