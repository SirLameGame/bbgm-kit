import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as teamFormActions from '../actions'
import { Input, Button, FormGroup, Paper } from 'material-ui'
import './assets/styles/TeamForm.css'

class TeamForm extends Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
  }

  updateTeam = (e) => {
    this.props.updateTeam(this.props.team.uuid, e.target.offsetParent.dataset.input, e.target.value)
  }

  render() {

    let {
      tid,
      name,
      cid,
      did,
      pop,
      strategy,
      abbrev,
      region,
      imgURL,
      uuid
    } = this.props.team

    return (
      <Paper>
          {!this.state.open &&
            <div className='team-display'>
              <div className='team-tid'>Team ID {tid}</div>
              <div className='team-name'>Name {name}</div>
              <div className='team-cid'>Conf. ID {cid}</div>
              <div className='team-did'>Div. ID {did}</div>
            </div>
          }
          {this.state.open &&
            <div className='input-fields'>
              <FormGroup>
                <Input
                  value={tid}
                  style={{input: {textAlign: 'center'}}}
                  placeholder='Team ID'
                  data-input={'tid'}
                  onChange={this.updateTeam}
                  type='number'
                  className='team-tid-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={name}
                  placeholder='Team Name'
                  data-input={'name'}
                  onChange={this.updateTeam}
                  type='text'
                  className='team-name-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={abbrev}
                  placeholder='Team Name Abbreviation'
                  data-input={'abbrev'}
                  onChange={this.updateTeam}
                  type='text'
                  className='team-abbrev-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={imgURL}
                  placeholder='Team Image URL'
                  data-input={'imgURL'}
                  onChange={this.updateTeam}
                  type='text'
                  className='team-imgURL-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={region}
                  placeholder='Team Region'
                  data-input={'region'}
                  onChange={this.updateTeam}
                  type='text'
                  className='team-region-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={strategy}
                  placeholder='Team Strategy'
                  data-input={'strategy'}
                  onChange={this.updateTeam}
                  type='text'
                  className='team-strategy-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={cid}
                  placeholder='Conference ID'
                  data-input={'cid'}
                  onChange={this.updateTeam}
                  type='number'
                  className='team-cid-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={did}
                  data-input={'did'}
                  placeholder='Division ID'
                  onChange={this.updateTeam}
                  type='number'
                  className='team-did-edit'/>
              </FormGroup>
              <FormGroup>
                <Input
                  value={pop}
                  placeholder='Population'
                  data-input={'pop'}
                  onChange={this.updateTeam}
                  type='number'
                  className='team-pop-edit'/>
              </FormGroup>
            </div>
          }
            <Button raised color='primary' onClick={() => {this.setState({open: !this.state.open})}}>
              {this.state.open ? 'Save' : 'Edit'}
            </Button>
            <Button raised color='accent' onClick={() => {this.props.deleteTeam(uuid)}}>X</Button>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTeam: teamFormActions.deleteTeam,
  updateTeam: teamFormActions.updateTeam
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
