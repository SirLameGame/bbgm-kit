import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'

const initialState = new List()

export const team = new Record({
  tid: 0,
  cid: 0,
  did: 0,
  name: '',
  region: '',
  abbrev: '',
  pop: 0,
  strategy: '',
  uuid: '',
  imgURL: ''
});

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_TEAM:
      return state.push(action.payload.set('uuid', uuid()))
    case types.DELETE_TEAM:
      return state.filter(obj => {return obj.uuid !== action.payload})
    default:
      return state;
  }
}

export default teamsReducer;