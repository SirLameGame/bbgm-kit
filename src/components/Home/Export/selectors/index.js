import { createSelector } from 'reselect'

const gameAttributes = state => state.gameAttributes
const teamsSelector = state => state.teams

export const leagueExportSelector = createSelector(
  teamsSelector,
  gameAttributes,
  (teams, gAttributes) => ({
    'startingSeason': gAttributes.get('startingSeason'),
    'gameAttributes': [
      {key: 'luxuryPayroll', value: gAttributes.get('luxuryPayroll')},
      {key: 'luxuryTax', value: gAttributes.get('luxuryTax')},
      {key: 'maxContract', value: gAttributes.get('maxContract')},
      {key: 'minPayroll', value: gAttributes.get('minPayroll')},
      {key: 'salaryCap', value: gAttributes.get('salaryCap')},
    ],
    teams: teams.toJS()
  })
)
