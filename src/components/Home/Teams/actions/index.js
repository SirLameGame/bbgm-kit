import * as types from '../constants';
import uuid from 'uuid/v4'

export const createTeam = (newTeam: Object) => ({
  type: types.CREATE_TEAM,
  payload: {
    team: newTeam,
    uuid: uuid(),
  }
});
export const deleteTeam = (teamUUID: String) => ({
  type: types.DELETE_TEAM,
  payload: teamUUID,
});

export const clearTeams = () => ({
  type: types.CLEAR_TEAMS,
});

export const updateTeam = (teamUUID: STRING, key: String, value) => ({
  type: types.UPDATE_TEAM,
  payload: {
    teamUUID: teamUUID,
    key: key,
    value: value,
  }
});

export const createRandoTeams = (team: Object) => ({
  type: types.CREATE_RANDOM_TEAMS,
  payload: team,
});
