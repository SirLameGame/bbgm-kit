import { createSelector } from 'reselect'

const gameAttributes = state => state.gameAttributes
const teamsSelector = state => state.teams
const playersSelector = state => state.players

export const leagueExportSelector = createSelector(
  teamsSelector,
  gameAttributes,
  playersSelector,
  (teams, gAttributes, players) => ({
    'startingSeason': gAttributes.get('startingSeason'),
    'gameAttributes': [
      {key: 'luxuryPayroll', value: gAttributes.get('luxuryPayroll')},
      {key: 'luxuryTax', value: gAttributes.get('luxuryTax')},
      {key: 'maxContract', value: gAttributes.get('maxContract')},
      {key: 'minPayroll', value: gAttributes.get('minPayroll')},
      {key: 'salaryCap', value: gAttributes.get('salaryCap')},
    ],
    teams: teams.toJS(),
    players: players.toJS()
  })
)
