import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Players from './Players';
import * as playerActions from './actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  createPlayer: playerActions.createPlayer
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Players);
