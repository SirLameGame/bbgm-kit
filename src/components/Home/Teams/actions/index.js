import * as types from '../constants';

export const createTeam = (team: Object) => ({
  type: types.CREATE_TEAM,
  payload: team
});

export const deleteTeam = (teamUUID: String) => ({
  type: types.DELETE_TEAM,
  payload: teamUUID
});

export const updateTeam = (teamUUID: STRING, key: String, value) => ({
  type: types.UPDATE_TEAM,
  payload: {
    teamUUID: teamUUID,
    key: key,
    value:value
  }
});

export const createRandoTeams = (team: Object) => ({
  type: types.CREATE_RANDOM_TEAMS,
  payload: team
});
