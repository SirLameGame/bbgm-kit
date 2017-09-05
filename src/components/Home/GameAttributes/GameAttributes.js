import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import ReactDataGrid from 'react-data-grid'
import { TextField } from 'material-ui'
import { Toolbar } from 'react-data-grid-addons'
import './assets/styles/GameAttributes.css'

const confColumns = [
  {
    name: 'Conference ID',
    key: 'cid',
    editable: true,
    resizable: true,
  }, {
    name: 'Name',
    key: 'name',
    editable: true,
    resizable: true,
  }
]

const divColumns = [
  {
    name: 'Conference ID',
    key: 'cid',
    editable: true,
    resizable: true,

  }, {
    name: 'Name',
    key: 'name',
    editable: true,
    resizable: true,
  }, {
    name: 'Division ID',
    key: 'did',
    editable: true,
    resizable: true,
  }
]

class GameAttributes extends PureComponent {

  constructor() {
    super()

    this.state = {
      selectedConfRows: [],
      selectedDivRows: [],
    }
  }

  onConfRowsSelected = (rows) => {
    this.setState({selectedConfRows: this.state.selectedConfRows.concat(rows.map(r => r.rowIdx))});
  }

  onConfRowsDeselected = (rows) => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedConfRows: this.state.selectedConfRows.filter(i => rowIndexes.indexOf(i) === -1 )});
  }

  onDivRowsSelected = (rows) => {
    this.setState({selectedDivRows: this.state.selectedDivRows.concat(rows.map(r => r.rowIdx))});
  }

  onDivRowsDeselected = (rows) => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedDivRows: this.state.selectedDivRows.filter(i => rowIndexes.indexOf(i) === -1 )});
  }

  render() {

    let {
      gameAttributes,
      updateAttribute,
      createConference,
      deleteConference,
      updateConference,
      createDivision,
      deleteDivision,
      updateDivision,
    } = this.props

    let attributes = [
      {attrib: 'startingSeason', helper: 'What year to start the game', placeholder: '2018', label: 'Starting Season', min: 0, max: 99999999999},
      {attrib: 'luxuryPayroll', helper: '', placeholder: '119000', label: 'Luxury Payroll', min: 0, max: 99999999999},
      {attrib: 'minPayroll', helper: 'The teams minimun payroll', placeholder: '84000', label: 'Minimum Payroll', min: 0, max: 99999999999},
      {attrib: 'luxuryTax', helper: 'The luxury tax charge', placeholder: '1', label: 'Luxury Tax', min: 0, max: 99999999999},
      {attrib: 'maxContract', helper: 'Max player contract size', placeholder: '25000', label: 'Maximum Contract', min: 0, max: 99999999999},
      {attrib: 'minContract', helper: 'Min player contract size', placeholder: '815', label: 'Minimum Contract', min: 0, max: 99999999999},
      {attrib: 'salaryCap', helper: 'The salary cap for teams', placeholder: '99000', label: 'Salary Cap', min: 0, max: 99999999999},
      {attrib: 'numPlayoffRounds', helper: '', placeholder: '7', label: 'Playoff Rounds', min: 0, max: 99999999999},
    ]

    let attribInputs = attributes.map((attrib, idx) => (
      <div key={attrib.attrib} className='attributeInput'>
          <TextField
            value={gameAttributes.get(attrib.attrib)}
            label={ attrib.label }
            onChange={event => updateAttribute(attrib.attrib, event.target.value)}
            type='number'
            helperText={attrib.helper}
            placeholder={attrib.placeholder}
            min={attrib.min}
            className={attrib.attrib}
            fullWidth/>
      </div>
    ))

    return (
      <div>
        <h1>Attributes</h1>
        { attribInputs }
        <h2>Conferences</h2>
        <ReactDataGrid
          enableCellSelect={true}
          columns={confColumns}
          toolbar={
            <Toolbar
            addRow={true}
            addRowButtonText="Create Conference"
            onAddRow={() => createConference()}>
            <button
              className='btn'
              onClick={() => {this.state.selectedConfRows.map(row => {
                return deleteConference(gameAttributes.confs.get(row).uuid)
              }); this.setState({selectedConfRows: []})}}
              type='button'>Delete</button>
          </Toolbar>
          }
          rowGetter={data => gameAttributes.confs.get(data)}
          rowsCount={gameAttributes.confs.size}
          minHeight={200}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onConfRowsSelected,
            onRowsDeselected: this.onConfRowsDeselected,
            selectBy: {
              indexes: this.state.selectedConfRows
            }
          }}
          onGridRowsUpdated={data => {
            updateConference({uuid: data.fromRowData.get('uuid'), key: data.cellKey, value: data.updated[data.cellKey]})
          }}/>
        <h2>Divisions</h2>
        <ReactDataGrid
          rowKey="uuid"
          enableCellSelect={true}
          columns={divColumns}
          toolbar={
            <Toolbar
            addRow={true}
            addRowButtonText="Create Division"
            onAddRow={() => createDivision()}>
            <button
              className='btn'
              onClick={() => {this.state.selectedDivRows.map(row => {
                return deleteDivision(gameAttributes.divs.get(row).uuid)
              }); this.setState({selectedDivRows: []})}}
              type='button'>Delete</button>
          </Toolbar>
          }
          rowGetter={data => gameAttributes.divs.get(data)}
          rowsCount={gameAttributes.divs.size}
          minHeight={200}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: false,
            onRowsSelected: this.onDivRowsSelected,
            onRowsDeselected: this.onDivRowsDeselected,
            selectBy: {
              indexes: this.state.selectedDivRows,
            }
          }}
          onGridRowsUpdated={data => {
            updateDivision({uuid: data.fromRowData.get('uuid'), key: data.cellKey, value: data.updated[data.cellKey]})
          }}/>
      </div>
    )
  }
}


GameAttributes.propTypes = {
  gameAttributes: PropTypes.object,
  updateAttribute: PropTypes.func,
  updateStartingSeason: PropTypes.func,
  createConference: PropTypes.func,
  createDivision: PropTypes.func,
  updateDivision: PropTypes.func,
  updateConference: PropTypes.func,
}

export default GameAttributes
