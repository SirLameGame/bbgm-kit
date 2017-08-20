import { createSelector } from 'reselect'

const gameAttributes = state => state.gameAttributes
const teamsSelector = state => state.teams

export const leagueExportSelector = createSelector(
  teamsSelector,
  gameAttributes,
  (teams, gAttributes) => ({
    'startingSeason': gAttributes.get('startingSeason'),
    'gameAttributes': {
      'luxuryPayroll': gAttributes.get('luxuryPayroll'),
      'luxuryTax': gAttributes.get('luxuryTax'),
      'maxContract': gAttributes.get('maxContract'),
      'minPayroll': gAttributes.get('minPayroll'),
      'salaryCap': gAttributes.get('salaryCap'),
    },
    teams: teams.toJS()
  })
)
