import * as types from '../constants';
import uuid from 'uuid/v4'

export const createPlayer = (newPlayer: Object) => ({
  type: types.CREATE_PLAYER,
  payload: {
    player: newPlayer,
    uuid: uuid()
  }
});

export const deletePlayer = (uuid: String) => ({
  type: types.DELETE_PLAYER,
  payload: uuid
});


export const updatePlayer = (uuid: String, key: String, value: String) => ({
  type: types.UPDATE_PLAYER,
  payload: {
    uuid,
    key,
    value,
  }
});

export const clearPlayers = () => ({
  type: types.CLEAR_PLAYERS,
});
