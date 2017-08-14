import * as types from '../constants';

export const createTeam = (team: Object) => ({
  type: types.CREATE_TEAM,
  payload: team
});
