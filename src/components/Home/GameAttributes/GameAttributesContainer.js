import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameAttributes from './GameAttributes';
import * as gaActions from './actions'

const mapStateToProps = state => ({
  gameAttributes: state.gameAttributes
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAttribute: gaActions.updateAttribute,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(GameAttributes);
