import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as teamFormActions from '../actions'
import { FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap'
import './assets/styles/TeamForm.css'

class TeamForm extends Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
  }

  render() {

    let {
      tid,
      name,
      cid,
      did,
      pop,
      uuid
    } = this.props.team

    return (
      <div>
        <FormGroup className='team-form'>
          {!this.state.open &&
            <div>
              <Col xs={2} className='team-tid'>Team ID {tid}</Col>
              <Col xs={2} className='team-name'>Name {name}</Col>
              <Col xs={2} className='team-cid'>Conf. ID {cid}</Col>
              <Col xs={2} className='team-did'>Div. ID {did}</Col>
              <Col xs={2} className='team-pop'>Population {pop}</Col>
            </div>
          }
          {this.state.open &&
            <div>
              <Col xs={2} componentClass={ControlLabel}>
                Team ID
              </Col>
              <Col xs={10}>
                <FormControl
                  value={tid}
                  type='text'
                  className='team-tid-edit'/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Name
              </Col>
              <Col xs={10}>
                <FormControl
                  value={name}
                  type='text'
                  className='team-name-edit'/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Conf
              </Col>
              <Col xs={10}>
                <FormControl
                  value={cid}
                  type='number'
                  className='team-cid-edit'/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Div
              </Col>
              <Col xs={10}>
                <FormControl
                  value={did}
                  type='number'
                  className='team-did-edit'/>
              </Col>
              <Col xs={2} componentClass={ControlLabel}>
                Population
              </Col>
              <Col xs={10}>
                <FormControl
                  value={pop}
                  type='number'
                  className='team-pop-edit'/>
              </Col>
            </div>
          }
          <Col xs={1}>
            <Button onClick={() => {this.setState({open: !this.state.open})}}>
              {this.state.open ? 'Save' : 'Edit'}
            </Button>
            <Button onClick={() => {this.props.deleteTeam(uuid)}}>X</Button>
          </Col>
        </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTeam: teamFormActions.deleteTeam
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
