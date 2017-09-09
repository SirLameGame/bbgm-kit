import { List } from 'immutable';
import * as types from '../constants';
import { player } from '../Player/reducers'

const initialState = new List()

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PLAYER:
      action.payload.player.uuid = action.payload.uuid
      return state.push(new player(action.payload.player))
    case types.DELETE_PLAYER:
      return state.filter(obj => obj.uuid !== action.payload)
    case types.UPDATE_PLAYER:
      switch(action.payload.key) {
        // String attributes
        case 'name':
        case 'pos':
        case 'college':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key, action.payload.value)
              : player ))
        // Attributes to parse as Integer
        case 'tid':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key, parseInt(action.payload.value, 10))
              : player ))
        case 'hgt':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key, parseInt(action.payload.value, 10))
              : player ))
        case 'weight':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key, parseInt(action.payload.value, 10))
              : player ))
        case 'born':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.born.set(action.payload.key,
                Object.assign({},
                  { year: parseInt(action.payload.value.year, 10) || player.born.get('year') },
                  { loc: action.payload.value.loc || player.born.get('loc') }))
              : player ))
        case 'contract':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key,
                Object.assign({},
                  { amount: parseInt(action.payload.value.amount, 10) || player.contract.get('amount') },
                  { exp: parseInt(action.payload.value.exp, 10) || player.contract.get('exp') }))
              : player ))
        case 'injury':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key,
                Object.assign({},
                  { type: parseInt(action.payload.value.type, 10) || player.injury.get('type') },
                  { gamesRemaining: parseInt(action.payload.value.gamesRemaining, 10) || player.injury.get('gamesRemaining') }))
              : player ))
        case 'draft':
          return state.map(player => (
            player.get('uuid') === action.payload.uuid
              ? player.set(action.payload.key,
                Object.assign({},
                  {round: parseInt(action.payload.value.round, 10) || player.contract.get('round')},
                  {pick: parseInt(action.payload.value.pick, 10) || player.contract.get('pick')},
                  {tid: parseInt(action.payload.value.tid, 10) || player.contract.get('tid')},
                  {originalTid: parseInt(action.payload.value.originalTid, 10) || player.contract.get('originalTid')},
                  {year: parseInt(action.payload.value.year, 10) || player.contract.get('year')}))
              : player ))
        default:
          return state
      }
    case types.CLEAR_PLAYERS:
      return initialState
    default:
      return state;
  }
}

export default playersReducer;
