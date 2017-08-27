import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameAttributes from './GameAttributes';
import * as gaActions from './actions'

const mapStateToProps = state => ({
  gameAttributes: state.gameAttributes
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAttribute: gaActions.updateAttribute,
  createConference: gaActions.createConference,
  createDivision: gaActions.createDivision,
  updateDivision: gaActions.updateDivision,
  updateConference: gaActions.updateConference,
  deleteConference: gaActions.deleteConference,
  deleteDivision: gaActions.deleteDivision,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(GameAttributes);
