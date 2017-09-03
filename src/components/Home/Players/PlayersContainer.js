import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Players from './Players';
import * as playerActions from './actions'

const mapStateToProps = state => ({
  players: state.players
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createPlayer: playerActions.createPlayer,
  deletePlayer: playerActions.deletePlayer,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Players);
