import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'
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
      action.payload['pop'].set(parseFloat(action.payload['pop']))
      action.payload['tid'].set(parseInt(action.payload['tid'], 10))
      action.payload['cid'].set(parseInt(action.payload['cid'], 10))
      action.payload['did'].set(parseInt(action.payload['did'], 10))
      action.payload = new team(action.payload)
      return state.push(action.payload.set('uuid', uuid()))
    case types.DELETE_TEAM:
      return state.filter(obj => {return obj.uuid !== action.payload})
    case types.UPDATE_TEAM:
      return state.map(team => {
        if (team.get('uuid') === action.payload.teamUUID) {
          if (['tid', 'cid', 'did'].includes(action.payload.key)) {
            return team.set(action.payload.key, parseInt(action.payload.value))
          } else
          if (['pop'].includes(action.payload.key)) {
            return team.set(action.payload.key, paseFloat(action.payload.value))
          } else {return team.set(action.payload.key, action.payload.value)}
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
          strategy: (['contending', 'rebuilding', 'hopeless', 'elite'][Math.floor(Math.random() * 4)]) ,
          population: 1
        })
      )))
    default:
      return state;
  }
}

export default teamsReducer;
