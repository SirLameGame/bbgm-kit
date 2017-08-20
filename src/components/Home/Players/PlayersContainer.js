import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Players from './Players';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Players);
