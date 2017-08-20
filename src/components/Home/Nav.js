import React, { Component } from 'react'
import FileSaver from 'file-saver'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { leagueExportSelector }  from './Export/selectors'
import './assets/styles/Nav.css'

class Nav extends Component {

  download = () => {
    var file = new File([JSON.stringify(this.props.leagueExport, null, 2)], "roster.txt", {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
  }

  render() {
    return (
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/attributes'>Game Attributes</Link>
        <Link to='/teams'>Teams</Link>
        <Link to='/players'>Players</Link>
        <Link to='/export'>Export</Link>
        <Link to='/download' onClick={this.download}>Download</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leagueExport: leagueExportSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
