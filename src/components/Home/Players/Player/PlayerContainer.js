import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from './Player';
import * as playerActions from '../actions'
//import * as playerActions from './actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updatePlayer: playerActions.updatePlayer
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Player);
