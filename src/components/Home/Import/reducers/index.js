import { List, Record } from 'immutable';
import * as types from '../constants';
import uuid from 'uuid/v4'
import rando from 'random-number-in-range'
import rw from 'random-words'

const initialState = new Record({
})

const importReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default importReducer;
