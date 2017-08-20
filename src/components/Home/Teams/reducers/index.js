import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'

const initialState = new List()

export const team = new Record({
  tid: '',
  cid: '',
  did: '',
  name: '',
  region: '',
  abbrev: '',
  pop: '',
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
    case types.UPDATE_TEAM:
      return state.map(team => {
        if (team.get('uuid') === action.payload.teamUUID) {
          return team.set(action.payload.key, action.payload.value)
        } else {return team}
      })
    case types.CREATE_RANDOM_TEAMS:
      return new List(Array.from(Array(30)).map((v, idx) => (
        new team({
          tid: (idx + 1),
          uuid: uuid(),
          cid: idx < 16 ? 1 : 2,
          did: idx < 5 ? 1 : idx < 10 ? 2 : idx < 15 ? 3 : idx < 20 ? 4 : idx < 25 ? 5 : idx < 30 ? 6 : 0
        })
      )))
    default:
      return state;
  }
}

export default teamsReducer;
