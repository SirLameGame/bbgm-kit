import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Players from './Players';
import { withRouter } from 'react-router-dom'
import * as playerActions from './actions'

const mapStateToProps = state => ({
  players: state.players
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createPlayer: playerActions.createPlayer,
  deletePlayer: playerActions.deletePlayer,
  updatePlayer: playerActions.updatePlayer,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Players));
