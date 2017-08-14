import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap'
import './assets/styles/TeamForm.css'

export default class TeamForm extends Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <FormGroup className='team-form'>
          {!this.state.open &&
            <div>
              <Col xs={2} className='team-tid'>Team ID </Col>
              <Col xs={2} className='team-name'>Name </Col>
              <Col xs={2} className='team-cid'>Conf. ID </Col>
              <Col xs={2} className='team-did'>Div. ID </Col>
              <Col xs={2} className='team-pop'>Population </Col>
            </div>
          }
          {this.state.open &&
            <div>
              <Col xs={2} componentClass={ControlLabel}>
                Name
              </Col>
              <Col xs={10}>
                <FormControl type='text' className='team-name-edit'/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Conf
              </Col>
              <Col xs={10}>
                <FormControl type='number' className='team-cid-edit'/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Div
              </Col>
              <Col xs={10}>
                <FormControl type='number' className='team-did-edit'/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Population
              </Col>
              <Col xs={10}>
                <FormControl type='number' className='team-pop-edit'/>
              </Col>
            </div>
          }
          <Col xs={1}>
            <Button onClick={this.toggleOpen}>{this.state.open ? 'Save' : 'Edit'}</Button>
          </Col>
        </FormGroup>
      </div>
    )
  }
}
