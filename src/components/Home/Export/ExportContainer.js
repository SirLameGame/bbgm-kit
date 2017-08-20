import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Export from './Export';
import { leagueExportSelector } from './selectors'

const mapStateToProps = state => ({
  teams: state.teams,
  leagueExport: leagueExportSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Export);
