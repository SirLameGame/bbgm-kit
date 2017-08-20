import React, { Component } from 'react'
import FileSaver from 'file-saver'
import { Nav, NavItem } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { leagueExportSelector }  from './Export/selectors'

class AppNav extends Component {

  download = () => {
    var file = new File([JSON.stringify(this.props.leagueExport, null, 2)], "roster.txt", {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(file);
  }

  render() {
    return (
      <Nav bsStyle="pills" activeKey={1} onSelect={this.props.navSelect}>
        <NavItem eventKey={'gameAttributes'}>Game Attributes</NavItem>
        <NavItem eventKey={'teams'}>Teams</NavItem>
        <NavItem eventKey={'json'}>JSON</NavItem>
        <NavItem eventKey={'download'} onClick={this.download}>Download</NavItem>
      </Nav>
    )
  }
}

const mapStateToProps = state => ({
  leagueExport: leagueExportSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
