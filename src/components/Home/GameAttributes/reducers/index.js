import {Record, List} from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'

const conf = new Record({'cid':0, 'name':'', uuid: ''})
const div = new Record({'cid':0, 'did': 0, 'name':'', uuid: ''})

const confs = new List()
const divs = new List()

const gameAttributes = new Record({
  'luxuryPayroll': 0,
  'luxuryTax': 0,
  'maxContract': 0,
  'minPayroll': 0,
  'salaryCap': 0,
  'minContract': 0,
  'numPlayoffRounds': 7,
  'confs': confs,
  'divs': divs,
  'startingSeason': 2017
});

const initialState = new gameAttributes();

const gameAttributesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ATTRIBUTE:
      return state.set(action.payload.key, parseInt(action.payload.value, 10))
    case types.CLEAR_ATTRIBUTES:
      return initialState
    case types.CREATE_CONFERENCE:
      return state.updateIn(['confs'], list => list.push((new conf(action.payload)).set('uuid', uuid())))
    case types.UPDATE_CONFERENCE:
      return state.updateIn(['confs'], list => list.map(conf => {
        if (conf.get('uuid') === action.payload.uuid) {
          if (['did'].includes(action.payload.key)) {
            return conf.set(action.payload.key, parseFloat(action.payload.value))
          } else {
            return conf.set(action.payload.key, action.payload.value)
          }
        } else { return conf}
      }))
    case types.DELETE_CONFERENCE:
      return state.updateIn(['confs'], list => list.filter(div => (
        div.get('uuid') !== action.payload
      )))
    case types.CREATE_DIVISION:
      return state.updateIn(['divs'], list => list.push((new div(action.payload)).set('uuid', uuid())))
    case types.UPDATE_DIVISION:
      return state.updateIn(['divs'], list => list.map(div => {
        if (div.get('uuid') === action.payload.uuid) {
          if (['did', 'cid'].includes(action.payload.key)) {
            return div.set(action.payload.key, parseFloat(action.payload.value))
          } else {
            return div.set(action.payload.key, action.payload.value)
          }
        } else { return div}
      }))
    case types.DELETE_DIVISION:
      return state.updateIn(['divs'], list => list.filter(div => (
        div.get('uuid') !== action.payload
      )))
    default:
      return state;
  }
}

export default gameAttributesReducer;
