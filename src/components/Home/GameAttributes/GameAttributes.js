import React from 'react'
import PropTypes from 'prop-types';
import {FormGroup, FormControl, ControlLabel, Form, Col} from 'react-bootstrap'

const GameAttributes = ({
  gameAttributes,
  updateLuxuryPayroll,
  updateMinPayroll,
  updateLuxuryTax,
  updateMaxContract,
  updateSalaryCap,
  updateStartingSeason
}) => (
  <Form horizontal>
    <FormGroup>
      <Col xs={2} componentClass={ControlLabel}>
        Starting Season
      </Col>
      <Col xs={10}>
        <FormControl
          value={gameAttributes.get('startingSeason')}
          onChange={event => {updateStartingSeason(event.target.value)}}
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
          onChange={event => {updateLuxuryPayroll(event.target.value)}}
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
          onChange={event => {updateMinPayroll(event.target.value)}}
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
          onChange={event => {updateLuxuryTax(event.target.value)}}
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
          onChange={event => {updateMaxContract(event.target.value)}}
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
          onChange={event => {updateSalaryCap(event.target.value)}}
          value={gameAttributes.get('salaryCap')}
          type='number'
          min={0}
          className='salaryCap' />
      </Col>
    </FormGroup>
  </Form>
)

GameAttributes.propTypes = {
  startingSeason: PropTypes.number,
  gameAttributes: PropTypes.object,
  updateLuxuryPayroll: PropTypes.func
}

export default GameAttributes
