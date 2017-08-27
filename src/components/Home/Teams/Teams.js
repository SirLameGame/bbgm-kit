import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { team } from './reducers'
import { Toolbar } from 'react-data-grid-addons'
import ReactDataGrid from 'react-data-grid'
import './assets/styles/Teams.css'
import 'bootstrap/dist/css/bootstrap.css'

const columns = [
  {
    name: 'Team ID',
    key: 'tid',
    width: 70,
    editable: true,
    resizable: true,
  }, {
    name: 'Name',
    key: 'name',
    editable: true,
    resizable: true,
  }, {
    name: 'Conference ID',
    key: 'cid',
    editable: true,
    resizable: true,
  }, {
    name: 'Division ID',
    key: 'did',
    editable: true,
    resizable: true,
  }, {
    name: 'Strategy',
    key: 'strategy',
    editable: true,
    resizable: true,
  }, {
    name: 'Region',
    key: 'region',
    editable: true,
    resizable: true,
  }, {
    name: 'Abbreviation',
    key: 'abbrev',
    editable: true,
    resizable: true,
  }, {
    name: 'Population',
    key: 'pop',
    editable: true,
    resizable: true,
  }, {
    name: 'Image URL',
    key: 'imgURL',
    editable: true,
    resizable: true,
  }
]

class Teams extends PureComponent {
  constructor() {
    super()

    this.state = {
      selectedTeamRows: [],
    }
  }

  onRowsSelected = (rows) => {
    this.setState({selectedTeamRows: this.state.selectedTeamRows.concat(rows.map(r => r.rowIdx))});
  }

  onRowsDeselected = (rows) => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedTeamRows: this.state.selectedTeamRows.filter(i => rowIndexes.indexOf(i) === -1 )});
  }

  render() {

    let {
      createTeam,
      createRandoTeams,
      clearTeams,
      deleteTeam,
      teams,
      updateTeam, } = this.props

    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          columns={columns}
          toolbar={
            <Toolbar
            addRow={true}
            addRowButtonText="Create Team"
            onAddRow={() => createTeam(team())}>
            <Button className onClick={() => {
                clearTeams()
                createRandoTeams()
              }}>Create Random Teams</Button>
            <button
              className='btn'
              onClick={() => {this.state.selectedTeamRows.map(row => {
                return deleteTeam(teams.get(row).uuid)
              }); this.setState({selectedTeamRows: []})}}
              type='button'>Delete</button>
          </Toolbar>
          }
          rowGetter={data => teams.get(data)}
          rowsCount={teams.size}
          minHeight={600}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedTeamRows
            }
          }}
          onGridRowsUpdated={data => {
            updateTeam(data.fromRowData.get('uuid'), data.cellKey, data.updated[data.cellKey])
          }}/>
      </div>
    )
  }

}


Teams.PropTypes = {
  team: PropTypes.object,
  createTeam: PropTypes.func,
  createTeams: PropTypes.func,
  updateTeam: PropTypes.func,
  clearTeams: PropTypes.func,
  deleteTeam: PropTypes.func,
}

export default Teams
