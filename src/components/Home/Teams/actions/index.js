import * as types from '../constants';

export const createTeam = (team: Object) => ({
  type: types.CREATE_TEAM,
  payload: team
});

export const deleteTeam = (team: Object) => ({
  type: types.DELETE_TEAM,
  payload: team
});
