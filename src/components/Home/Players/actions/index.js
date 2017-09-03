import * as types from '../constants';


export const createPlayer = (player: Object) => ({
  type: types.CREATE_PLAYER,
  payload: player
});

export const deletePlayer = (uuid: String) => ({
  type: types.DELETE_PLAYER,
  payload: uuid
});

export const clearPlayers = () => ({
  type: types.CLEAR_PLAYERS,
});
