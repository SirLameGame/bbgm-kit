import { List, Record } from 'immutable';
import * as types from '../constants';

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
  imgURL: ''
});

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_TEAM:
      console.log(action.payload)
      return state.push(action.payload)
    default:
      return state;
  }
}

export default teamsReducer;
