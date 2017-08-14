import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameAttributes from './GameAttributes';
import * as gaActions from './actions/GameAttributesActions'

const mapStateToProps = state => ({
  gameAttributes: state.gameAttributes
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateLuxuryPayroll: gaActions.updateLuxuryPayroll,
  updateMinPayroll: gaActions.updateMinPayroll,
  updateLuxuryTax: gaActions.updateLuxuryTax,
  updateMaxContract: gaActions.updateMaxContract,
  updateSalaryCap: gaActions.updateSalaryCap,
  updateStartingSeason: gaActions.updateStartingSeason
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(GameAttributes);
