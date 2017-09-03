import * as types from '../constants';


export const createPlayer = (player: Object) => ({
  type: types.CREATE_PLAYER,
  payload: player
});

export const deletePlayer = (uuid: String) => ({
  type: types.DELETE_PLAYER,
  payload: uuid
});


export const updatePlayer = (uuid: String, key: String, value: String) => ({
  type: types.DELETE_PLAYER,
  payload: {
    uuid,
    key,
    value,
  }
});

export const clearPlayers = () => ({
  type: types.CLEAR_PLAYERS,
});
