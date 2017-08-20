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
  born: {
    year: 0,
    loc: ''
  },
  imgURL: '',
  contract: {
    amount: 0,
    exp: 0
  },
  draft: {
    round: 0,
    pick: 0,
    tid: 0,
    originalTid: 0,
    year: 0
  },
  college: 0,
  ratings: [
    {
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
    }
  ],
  injury: {
    type: 'Healthy',
    gamesRemaining: 0
  }
});

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PLAYER:
      return state.push(action.payload.set('uuid', uuid()))
    default:
      return state;
  }
}

export default playersReducer;
