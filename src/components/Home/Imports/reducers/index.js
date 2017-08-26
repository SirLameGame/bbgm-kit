import { Record } from 'immutable';
import * as types from '../constants';

const imports = new Record({
  loadingMessage: ''
})

const initialState = new imports()

const importReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING_MESSAGE:
      return state.set('loadingMessage', action.payload)
    default:
      return state;
  }
}

export default importReducer
