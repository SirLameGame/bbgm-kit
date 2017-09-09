import * as types from '../constants';
import uuid from 'uuid/v4'

export const createNewPlayer = (player: Object) => ({
  type: types.CREATE_NEW_PLAYER,
  payload: {
    player: player,
    uuid: uuid()
  }
});
