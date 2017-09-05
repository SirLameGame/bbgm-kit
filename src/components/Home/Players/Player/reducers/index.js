import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'

const initialState = new List()


const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.CREATE_PLAYER:
    //   action.payload = new player(action.payload)
    //   return state.push(action.payload.set('uuid', uuid()))
      return initialState
    default:
      return state;
  }
}

export default playersReducer;
