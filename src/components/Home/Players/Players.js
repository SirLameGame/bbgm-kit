import React, { PureComponent } from 'react'
import Button from 'material-ui/Button'
//import { player } from './reducers'
import { Toolbar } from 'react-data-grid-addons'
import ReactDataGrid from 'react-data-grid'

const columns = [
  {
    name: 'Name',
    key: 'name',
    editable: true,
    resizable: true,
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
    } = this.props

    let {
      selectedPlayerRows,
    } = this.state

    return (
      <div>
        <ReactDataGrid
          enableCellSelect={true}
          columns={columns}
          toolbar={
            <Toolbar>
            <Button onClick={() => {
              createPlayer()
            }}>Create Random Player</Button>
            <button
              className='btn'
              style={(selectedPlayerRows.length > 0 ? {
                backgroundColor: 'red',
                coor: 'white',
              }:{})}
              disabled={(selectedPlayerRows.length < 1)}
              onClick={() => {this.state.selectedPlayerRows.map(row => {
                return deletePlayer(players.get(row).uuid)
              }); this.setState({selectedPlayerRows: []})}}
              type='button'>Delete</button>
          </Toolbar>
          }
          rowGetter={data => players.get(data)}
          rowsCount={players.size}
          minHeight={600}
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
            //updateTeam(data.fromRowData.get('uuid'), data.cellKey, data.updated[data.cellKey])
          }}/>
      </div>
    )
  }
}
//<Button raised onClick={() => createPlayer(player())}>Create Players</Button>
export default Players
