import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Teams from './Teams';
import * as teamsActions from './actions'

const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createTeam: teamsActions.createTeam,
  clearTeams: teamsActions.clearTeams,
  createRandoTeams: teamsActions.createRandoTeams,
  updateTeam: teamsActions.updateTeam
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
