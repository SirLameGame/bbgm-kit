import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from './Player';
//import * as playerActions from './actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Player);
