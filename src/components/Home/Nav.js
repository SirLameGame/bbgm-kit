import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { FlatButton } from 'material-ui'
import { leagueExportSelector } from './Export/selectors'
import { connect } from 'react-redux';
import FileSaver from 'file-saver'
import './assets/styles/Nav.css'

const Nav = ({leagueExport}) => (
  <div className='nav'>
    <Link to='/'><FlatButton>Home</FlatButton></Link>
    <Link to='/attributes'><FlatButton>Game Attributes</FlatButton></Link>
    <Link to='/teams'><FlatButton>Teams</FlatButton></Link>
    <Link to='/players'><FlatButton>Players</FlatButton></Link>
    <Link to='/transfer'><FlatButton>Transfer</FlatButton></Link>
    <FlatButton
      onClick={() => {
          FileSaver.saveAs(new File([JSON.stringify(leagueExport, null, 0)],
            "roster.txt", {type: "text/plain;charset=utf-8"}));
        }}>Download</FlatButton>
  </div>
)

const mapStateToProps = state => ({
  leagueExport: leagueExportSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
