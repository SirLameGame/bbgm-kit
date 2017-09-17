import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'
import cities from 'cities-list'
import nick from 'nick-generator'
import { sample } from 'lodash'

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
      let newTeam = Object.assign({}, team().toJS(), action.payload.team,)
      newTeam['pop'] = parseFloat(newTeam['pop'])
      newTeam['tid'] = parseInt(newTeam['tid'], 10)
      newTeam['cid'] = parseInt(newTeam['cid'], 10)
      newTeam['did'] = parseInt(newTeam['did'], 10)
      newTeam['uuid'] = action.payload.uuid
      return state.push(new team(newTeam))
    case types.DELETE_TEAM:
      return state.filter(obj => obj.uuid !== action.payload)
    case types.UPDATE_TEAM:
      return state.map(team => (
        team.get('uuid') === action.payload.teamUUID ?
          ['tid', 'cid', 'did'].includes(action.payload.key)
            ? team.set(action.payload.key, parseInt(action.payload.value, 10))
            : ['pop'].includes(action.payload.key)
              ? team.set(action.payload.key, parseFloat(action.payload.value))
              : null
        : team))
    case types.CLEAR_TEAMS:
      return initialState
    case types.CREATE_RANDOM_TEAMS:
      return new List(Array.from(Array(30)).map((v, idx) => {

        let name = nick() + 's'
        let abbrev = name.replace(/\s/g, '').split('')
        do {
          abbrev.splice(Math.floor(Math.random() * abbrev.length), 1)
        } while (abbrev.length > 3)

        return new team({
          tid: idx,
          uuid: uuid(),
          abbrev: abbrev.join('').toUpperCase(),
          region: sample(Object.keys(cities)),
          pop: parseFloat((Math.random() * (10 - 0.8) + 0.0200).toFixed(1)),
          cid: idx < 15 ? 0 : 1,
          did: idx < 5 ? 0 : idx < 10 ? 1 : idx < 15 ? 2 : idx < 20 ? 3 : idx < 25 ? 4 : idx < 30 ? 5 : 0,
          name: name,
          strategy: (['contending', 'rebuilding', 'hopeless', 'elite'][Math.floor(Math.random() * 4)]) ,
          population: 1
        })

      }))
    default:
      return state;
  }
}

export default teamsReducer;
