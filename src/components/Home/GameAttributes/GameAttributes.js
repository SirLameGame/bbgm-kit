import React from 'react'
import PropTypes from 'prop-types';
import {FormGroup, FormControl, ControlLabel, Form, Col} from 'react-bootstrap'
import ReactDataGrid from 'react-data-grid'
import 'bootstrap/dist/css/bootstrap.css'

const confColumns = [
  {
    name: 'Conference ID',
    key: 'cid',
    editable: true
  }, {
    name: 'Name',
    key: 'name',
    editable: true
  }
]

const divColumns = [
  {
    name: 'Conference ID',
    key: 'cid',
    editable: true
  }, {
    name: 'Name',
    key: 'name',
    editable: true
  }, {
    name: 'Division ID',
    key: 'did',
    editable: true
  }
]

const GameAttributes = ({
  gameAttributes,
  updateAttribute,
  updateStartingSeason
}) => (
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
            onChange={event => {updateAttribute('startingSeason', event.target.value)}}
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
            onChange={event => {updateAttribute('luxuryPayroll', event.target.value)}}
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
            onChange={event => {updateAttribute('minPayroll', event.target.value)}}
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
            onChange={event => {updateAttribute('luxuryTax', event.target.value)}}
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
            onChange={event => {updateAttribute('maxContract', event.target.value)}}
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
            onChange={event => {updateAttribute('salaryCap', event.target.value)}}
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
            onChange={event => {updateAttribute('minContract', event.target.value)}}
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
      rowGetter={data => gameAttributes.confs.get(data)}
      rowsCount={gameAttributes.confs.size}
      minHeight={200}/>
    <h2>Divisions</h2>
    <ReactDataGrid
      enableCellSelect={true}
      columns={divColumns}
      rowGetter={data => gameAttributes.divs.get(data)}
      rowsCount={gameAttributes.divs.size}
      minHeight={200}/>
  </div>
)

GameAttributes.propTypes = {
  gameAttributes: PropTypes.object,
  updateAttribute: PropTypes.func,
  updateStartingSeason: PropTypes.func,
}

export default GameAttributes
