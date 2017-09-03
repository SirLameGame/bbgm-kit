import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'
import rando from 'random-number-in-range'
import rw from 'random-words'

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
      action.payload = new team(action.payload)
      return state.push(action.payload.set('uuid', uuid()))
    case types.DELETE_TEAM:
      return state.filter(obj => {return obj.uuid !== action.payload})
    case types.UPDATE_TEAM:
      return state.map(team => {
        if (team.get('uuid') === action.payload.teamUUID) {
          return team.set(action.payload.key, action.payload.value)
        } else {return team}
      })
    case types.CLEAR_TEAMS:
      return initialState
    case types.CREATE_RANDOM_TEAMS:
      return new List(Array.from(Array(30)).map((v, idx) => (
        new team({
          tid: idx,
          uuid: uuid(),
          pop: parseFloat((Math.random() * (10 - 0.8) + 0.0200).toFixed(1)),
          cid: idx < 15 ? 0 : 1,
          did: idx < 5 ? 0 : idx < 10 ? 1 : idx < 15 ? 2 : idx < 20 ? 3 : idx < 25 ? 4 : idx < 30 ? 5 : 0,
          name: String(rw({join: ' ', min: 3, max: 6})),
          strategy: String(rw(1)),
          population: 1
        })
      )))
    default:
      return state;
  }
}

export default teamsReducer;
