import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Import from './Import';
import * as teamsActions from '../Teams/actions'
import * as playersActions from '../Players/actions'
import * as gaActions from '../GameAttributes/actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  clearTeams: teamsActions.clearTeams,
  createTeam: teamsActions.createTeam,
  clearPlayers: playersActions.clearPlayers,
  createPlayer: playersActions.createPlayer,
  updateAttribute: gaActions.updateAttribute,
  clearAttributes: gaActions.clearAttributes,
  createConference: gaActions.createConference,
  createDivision: gaActions.createDivision,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Import);
