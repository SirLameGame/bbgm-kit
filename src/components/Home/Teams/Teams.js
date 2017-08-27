import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { team } from './reducers'
import ReactDataGrid from 'react-data-grid'
import './assets/styles/Teams.css'
import 'bootstrap/dist/css/bootstrap.css'

const columns = [
  {
    name: 'Team ID',
    key: 'tid',
    width: 70,
    editable: true
  }, {
    name: 'Name',
    key: 'name',
    editable: true
  }, {
    name: 'Conference ID',
    key: 'cid',
    editable: true
  }, {
    name: 'Division ID',
    key: 'did',
    editable: true
  }, {
    name: 'Strategy',
    key: 'strategy',
    editable: true
  }, {
    name: 'Region',
    key: 'region',
    editable: true
  }, {
    name: 'Abbreviation',
    key: 'abbrev',
    editable: true
  }, {
    name: 'Population',
    key: 'pop',
    editable: true
  }, {
    name: 'Image URL',
    key: 'imgURL',
    editable: true
  }
]

const Teams = ({
  createTeam,
  createRandoTeams,
  clearTeams,
  teams,
  updateTeam}) => (
    <div className='team-editor'>
      <Button className onClick={() => createTeam(team())}>Create Team</Button>
      <Button className onClick={() => {
          clearTeams()
          createRandoTeams()
        }}>Create Random Teams</Button>
      <hr/>
      <ReactDataGrid
        enableCellSelect={true}
        columns={columns}
        rowGetter={data => teams.get(data)}
        rowsCount={teams.size}
        minHeight={600}
        onGridRowsUpdated={data => {
          updateTeam(data.fromRowData.get('uuid'), data.cellKey, data.updated[data.cellKey])
        }}/>
    </div>
)

Teams.PropTypes = {
  team: PropTypes.object,
  createTeam: PropTypes.func,
  createTeams: PropTypes.func,
  updateTeam: PropTypes.func,
  clearTeams: PropTypes.func,
}

export default Teams
