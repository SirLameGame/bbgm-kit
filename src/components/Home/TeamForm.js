import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap'
import './assets/styles/TeamForm.css'

export default class TeamForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      team: props.team
    }
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open})
  }

  updateTeam = (action) => {
    let attrib = action.target.className.split(' ')[0].split('-')[1]
    let state = this.state

    state.team[attrib] = action.target.value

    this.setState(state)
  }

  render() {
    return (
      <div>
        <FormGroup className='team-form'>
          {!this.state.open &&
            <div>
              <Col xs={2} className='team-tid'>Team ID {this.state.team.tid}</Col>
              <Col xs={2} className='team-name'>Name {this.state.team.name}</Col>
              <Col xs={2} className='team-cid'>Conf. ID {this.state.team.cid}</Col>
              <Col xs={2} className='team-did'>Div. ID {this.state.team.did}</Col>
              <Col xs={2} className='team-pop'>Population {this.state.team.pop}</Col>
            </div>
          }
          {this.state.open &&
            <div>
              <Col xs={2} componentClass={ControlLabel}>
                Name
              </Col>
              <Col xs={10}>
                <FormControl type='text' className='team-name-edit' value={this.state.team.name} onChange={this.updateTeam}/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Conf
              </Col>
              <Col xs={10}>
                <FormControl type='number' className='team-cid-edit' value={this.state.team.cid} onChange={this.updateTeam}/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Div
              </Col>
              <Col xs={10}>
                <FormControl type='number' className='team-did-edit' value={this.state.team.did} onChange={this.updateTeam}/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Population
              </Col>
              <Col xs={10}>
                <FormControl type='number' className='team-pop-edit' value={this.state.team.pop} onChange={this.updateTeam}/>
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
