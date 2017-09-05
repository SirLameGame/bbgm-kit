import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'

const initialState = new List()

export const player = new Record({
  uuid: '',
  tid: 0,
  name: '',
  pos: '',
  hgt: 0,
  weight: 0,
  born: new Record({
    year: 0,
    loc: ''
  }),
  imgURL: '',
  contract: new Record({
    amount: 0,
    exp: 0
  }),
  draft: new Record({
    round: 0,
    pick: 0,
    tid: 0,
    originalTid: 0,
    year: 0
  }),
  college: '',
  ratings: new List([
    new Record({
      hgt: 0,
      stre: 0,
      spd: 0,
      jmp: 0,
      endu: 0,
      ins: 0,
      dnk: 0,
      ft: 0,
      fg: 0,
      tp: 0,
      blk: 0,
      stl: 0,
      drb: 0,
      pss: 0,
      reb: 0,
      pot: 0,
      skills: []
    })
  ]),
  injury: new Record({
    type: 'Healthy',
    gamesRemaining: 0
  })
})

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PLAYER:
      action.payload = new player(action.payload)
      return state.push(action.payload.set('uuid', uuid()))
    case types.UPDATE_PLAYER:
      switch(action.payload.key) {
        // String attributes
        case 'name':
        case 'pos':
        case 'college':
          state.players.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key, action.payload.value)
              : player ))
          break
        // Attributes to parse as Integer
        case 'tid':
        case 'hght':
          state.players.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key, parseInt(action.payload.value, 10))
              : player ))
          break
        case 'born':
          state.players.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.born.set(action.payload.key,
                Object.assign({},
                  { year: parseInt(action.payload.value.year, 10) || player.born.get('year') },
                  { loc: action.payload.value.loc || player.born.get('loc') }))
              : player ))
          break
        case 'contract':
          state.players.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key,
                Object.assign({},
                  { amount: parseInt(action.payload.value.amount, 10) || player.contract.get('amount') },
                  { exp: parseInt(action.payload.value.exp, 10) || player.contract.get('exp') }))
              : player ))
          break
        case 'injury':
          state.players.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key,
                Object.assign({},
                  { type: parseInt(action.payload.value.type, 10) || player.injury.get('type') },
                  { gamesRemaining: parseInt(action.payload.value.gamesRemaining, 10) || player.injury.get('gamesRemaining') }))
              : player ))
          break
        case 'draft':
          state.players.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key,
                Object.assign({},
                  {round: parseInt(action.payload.value.round, 10) || player.contract.get('round')},
                  {pick: parseInt(action.payload.value.pick, 10) || player.contract.get('pick')},
                  {tid: parseInt(action.payload.value.tid, 10) || player.contract.get('tid')},
                  {originalTid: parseInt(action.payload.value.originalTid, 10) || player.contract.get('originalTid')},
                  {year: parseInt(action.payload.value.year, 10) || player.contract.get('year')}))
              : player ))
          break
        default:
          return state
      }
      break
    case types.CLEAR_PLAYERS:
      return initialState
    default:
      return state;
  }
}

export default playersReducer;
