import React, { PureComponent } from 'react'
import { FlatButton } from 'material-ui'
//import { player } from './reducers'
import { Toolbar } from 'react-data-grid-addons'
import { withRouter } from "react-router-dom";
import ReactDataGrid from 'react-data-grid'

const columns = [
  {
    name: 'Name',
    key: 'name',
    editable: true,
    resizable: true,
    events: {
      onDoubleClick: (one, two, three) => {
        one.persist()
        console.log(one)
        console.log(two)
      }
    }
  },
  {
    name: 'Team ID',
    key: 'tid',
    width: 70,
    editable: true,
    resizable: true,
  },
  {
    name: 'Height',
    key: 'hgt',
    editable: true,
    resizable: true,
  },
  {
    name: 'Weight',
    key: 'weight',
    editable: true,
    resizable: true,
  },
  {
    name: 'College',
    key: 'college',
    editable: true,
    resizable: true,
  },
]

class Players extends PureComponent {

  constructor() {
    super()

    this.state = {
      selectedPlayerRows: [],
    }
  }

  onRowsSelected = (rows) => {
    this.setState({selectedPlayerRows: this.state.selectedPlayerRows.concat(rows.map(r => r.rowIdx))});
  }

  onRowsDeselected = (rows) => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedPlayerRows: this.state.selectedPlayerRows.filter(i => rowIndexes.indexOf(i) === -1 )});
  }

  render() {

    let {
      players,
      createPlayer,
      deletePlayer,
      updatePlayer,
      history,
    } = this.props

    let {
      selectedPlayerRows,
    } = this.state

    return (
      <div>
        <ReactDataGrid
          ref={ node => this.grid = node }
          enableCellSelect={true}
          columns={columns}
          toolbar={
            <Toolbar>
            {false &&
            <FlatButton onClick={() => {
              createPlayer()
            }}>Create Random Player</FlatButton>
            }
            <FlatButton onClick={() => history.push('/players/edit')}>Create Player</FlatButton>
            <FlatButton
              className='btn'
              style={(selectedPlayerRows.length > 0 ? {
                backgroundColor: 'red',
                color: 'white',
              }:{})}
              disabled={(selectedPlayerRows.length < 1)}
              onClick={() => {this.state.selectedPlayerRows.map(row => {
                return deletePlayer(players.get(row).uuid)
              }); this.setState({selectedPlayerRows: []})}}
              type='button'>Delete</FlatButton>
          </Toolbar>
          }
          rowGetter={data => players.get(data)}
          rowsCount={players.size}
          minHeight={600}
          onRowClick={(idx, data) => history.push(`/players/edit?uuid=${data.get('uuid')}`)}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: selectedPlayerRows
            }
          }}
          onGridRowsUpdated={data => {
            updatePlayer(data.fromRowData.get('uuid'), data.cellKey, data.updated[data.cellKey])
          }}/>
      </div>
    )
  }
}
//<FlatButton raised onClick={() => createPlayer(player())}>Create Players</FlatButton>
export default withRouter(Players)
