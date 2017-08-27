import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {FormGroup, FormControl, ControlLabel, Form, Col} from 'react-bootstrap'
import ReactDataGrid from 'react-data-grid'
import { Toolbar } from 'react-data-grid-addons'
import 'bootstrap/dist/css/bootstrap.css'

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

    return (
      <div>
        <h1>Attributes</h1>
        <Form horizontal>
          <FormGroup>
            <Col xs={2} componentClass={ControlLabel}>
              Starting Season
            </Col>
            <Col xs={10}>
              <FormControl
                value={gameAttributes.get('startingSeason')}
                onChange={event => updateAttribute('startingSeason', event.target.value)}
                type='number'
                min={0}
                className='startingSeason' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={2} componentClass={ControlLabel}>
              Luxury Payroll
            </Col>
            <Col xs={10}>
              <FormControl
                value={gameAttributes.get('luxuryPayroll')}
                onChange={event => updateAttribute('luxuryPayroll', event.target.value)}
                type='number'
                min={0}
                className='luxuryPayroll' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={2} componentClass={ControlLabel}>
              Min Payroll
            </Col>
            <Col xs={10}>
              <FormControl
                value={gameAttributes.get('minPayroll')}
                onChange={event => updateAttribute('minPayroll', event.target.value)}
                type='number'
                min={0}
                className='minPayroll' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={2} componentClass={ControlLabel}>
              Luxury Tax
            </Col>
            <Col xs={10}>
              <FormControl
                value={gameAttributes.get('luxuryTax')}
                onChange={event => updateAttribute('luxuryTax', event.target.value)}
                type='number'
                min={0}
                className='luxuryTax' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={2} componentClass={ControlLabel}>
              Max Contract
            </Col>
            <Col xs={10}>
              <FormControl
                value={gameAttributes.get('maxContract')}
                onChange={event => updateAttribute('maxContract', event.target.value)}
                type='number'
                min={0}
                className='maxContract' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={2} componentClass={ControlLabel}>
              Salary Cap
            </Col>
            <Col xs={10}>
              <FormControl
                value={gameAttributes.get('salaryCap')}
                onChange={event => updateAttribute('salaryCap', event.target.value)}
                type='number'
                min={0}
                className='salaryCap' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col xs={2} componentClass={ControlLabel}>
              Min Contract
            </Col>
            <Col xs={10}>
              <FormControl
                value={gameAttributes.get('minContract')}
                onChange={event => updateAttribute('minContract', event.target.value)}
                type='number'
                min={0}
                className='minContract' />
            </Col>
          </FormGroup>
        </Form>
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
