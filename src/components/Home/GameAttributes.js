import React, {Component} from 'react'
import {FormGroup, FormControl, ControlLabel, Form, Col} from 'react-bootstrap'

export default class GameAttributes extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col xs={2} componentClass={ControlLabel}>
            Starting Season
          </Col>
          <Col xs={10}>
            <FormControl type='number' min={0} className='startingSeason' value={this.props.startingSeason} onChange={this.props.chStartingSeason}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={2} componentClass={ControlLabel}>
            Luxury Payroll
          </Col>
          <Col xs={10}>
            <FormControl type='number' min={0} className='luxuryPayroll' value={this.props.gameAttributes.find(obj => {
              return obj.key === 'luxuryPayroll'
            }).value} onChange={this.props.chGameAttribute}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={2} componentClass={ControlLabel}>
            Min Payroll
          </Col>
          <Col xs={10}>
            <FormControl type='number' min={0} className='minPayroll' value={this.props.gameAttributes.find(obj => {
              return obj.key === 'minPayroll'
            }).value} onChange={this.props.chGameAttribute}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={2} componentClass={ControlLabel}>
            Luxury Tax
          </Col>
          <Col xs={10}>
            <FormControl type='number' min={0} className='luxuryTax' value={this.props.gameAttributes.find(obj => {
              return obj.key === 'luxuryTax'
            }).value} onChange={this.props.chGameAttribute}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={2} componentClass={ControlLabel}>
            Max Contract
          </Col>
          <Col xs={10}>
            <FormControl type='number' min={0} className='maxContract' value={this.props.gameAttributes.find(obj => {
              return obj.key === 'maxContract'
            }).value} onChange={this.props.chGameAttribute}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col xs={2} componentClass={ControlLabel}>
            Salary Cap
          </Col>          
          <Col xs={10}>
            <FormControl type='number' min={0} className='salaryCap' value={this.props.gameAttributes.find(obj => {
              return obj.key === 'salaryCap'
            }).value} onChange={this.props.chGameAttribute}/>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
