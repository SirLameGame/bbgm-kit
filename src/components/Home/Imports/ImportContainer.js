import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Imports from './Imports';
import * as teamsActions from '../Teams/actions'
import * as playersActions from '../Players/actions'
import * as gaActions from '../GameAttributes/actions'
import * as importActions from './actions'

const mapStateToProps = state => ({
  loadingMessage: state.imports.get('loadingMessage')
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
  setLoadingMessage: importActions.setLoadingMessage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Imports);
