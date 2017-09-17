import React, { PureComponent } from 'react'
// import FlatButton from 'material-ui/FlatButton'
import { player } from '../../../../data'
// import { Toolbar } from 'react-data-grid-addons'
// import ReactDataGrid from 'react-data-grid'
import { withRouter } from 'react-router-dom'
import { TextField, SelectField, FlatButton, MenuItem } from 'material-ui'
import './assets/styles/Player.css'

// const columns = [
//   {
//     name: 'Name',
//     key: 'name',
//     editable: true,
//     resizable: true,
//   },
// ]

class Player extends PureComponent {

  constructor(props) {
    super(props)

    const query = new URLSearchParams(props.location.search)

    let uuidPlayer = props.players.filter(player => player.uuid === query.get('uuid')).toJS()[0]

    let thisPlayer = uuidPlayer
      ? uuidPlayer
      : player

    this.state = {
      ...thisPlayer
    }
  }

  render() {

    let {
      createPlayer,
      updatePlayer,
    } = this.props

    let playerInputs = [
      { input: 'name', type: 'text', helper: 'Name of the player', placeholder: 'Sir LameGame',
        label: 'Players Name'},
      { input: 'college', type: 'text', helper: 'Players College', placeholder: 'Georgetown',
        label: 'College'},
      { input: 'tid', type: 'number', helper: 'ID of the team. -1 for no team', placeholder: '-1',
        label: 'Team ID'},
      { input: 'hgt', type: 'number', helper: 'Height of the player', placeholder: '55',
        label: 'Height'},
    ]

    let draft = [
      { input: 'round', type: 'number', helper: 'Round Drafted', placeholder: '1',
        label: 'Round Drafted'},
      { input: 'pick', type: 'number', helper: 'Pick Number', placeholder: '1',
        label: 'Pick Number'},
      { input: 'tid', type: 'number', helper: 'Team Drafted', placeholder: '0',
        label: 'Team Drafted'},
      { input: 'originalTid', type: 'number', helper: 'Orignal Team ID', placeholder: '0',
        label: 'Players Name'},
      { input: 'year', type: 'number', helper: 'Draft Year', placeholder: '2018',
        label: 'Draft'},
    ]

    let inputs = playerInputs.map((input, idx) => (
      <div key={input.input} className='playerInput'>
          <TextField
            value={this.state[input.input]}
            floatingLabelText={ input.label }
            onChange={e => this.setState({[input.input]: e.target.value})}
            type={input.type}
            hintText={`${input.helper}`}
            min={input.min}
            className={input.input}
            fullWidth/>
      </div>
    ))

    let draftInputs = draft.map((input, idx) => (
      <div key={input.input} className='playerInput'>
          <TextField
            value={this.state.draft[input.input]}
            floatingLabelText={ input.label }
            onChange={e => this.setState({draft: {[input.input]: e.target.value}})}
            type={input.type}
            hintText={`${input.helper}`}
            min={input.min}
            className={input.input}
            fullWidth/>
      </div>
    ))

    return (
      <div className='edit-player-container'>
        <div className='create-player-actions'>
          <FlatButton onClick={() => {
            this.state.uuid
            ? Object.keys(this.state).forEach(attrib => {
              if (attrib !== 'uuid') { updatePlayer(this.state.uuid, attrib, this.state[attrib])}
            })
            : createPlayer(this.state)
          }}>{ this.state.uuid ? 'Save' : 'Create'}</FlatButton>
        </div>
        <div className='edit-player'>
          <div className='edit-player-inputs'>
            { inputs }
            <div className='playerInput'>
              <SelectField
                value={this.state.pos}
                floatingLabelText='Position'
                onChange={(e, i, v) => {this.setState({pos: v})}}>
                  <MenuItem value={'PG'} primaryText='PG' />
                  <MenuItem value={'SG'} primaryText='SG' />
                  <MenuItem value={'SF'} primaryText='SF' />
                  <MenuItem value={'PF'} primaryText='PF' />
                  <MenuItem value={'C'} primaryText='C' />
                  <MenuItem value={'G'} primaryText='G' />
                  <MenuItem value={'GF'} primaryText='GF' />
                  <MenuItem value={'F'} primaryText='F' />
                  <MenuItem value={'FC'} primaryText='FC' />
              </SelectField>
            </div>
            <div className='playerInput'>
              <TextField
                value={this.state.born.year}
                floatingLabelText='Birh Year'
                onChange={e => this.setState({born: {...this.state.born, year: e.target.value}})}
                type='number'
                hintText='Year of Birth'
                min={0}
                fullWidth/>
            </div>
            <div className='playerInput'>
              <TextField
                value={this.state.born.loc}
                floatingLabelText='Birh Location'
                onChange={e => this.setState({born: {...this.state.born, loc: e.target.value}})}
                type='text'
                hintText='Location of Birth'
                min={0}
                fullWidth/>
            </div>
            <div className='playerInput'>
              <TextField
                value={this.state.contract.amount}
                floatingLabelText='Contract Amount'
                onChange={e => this.setState({contract: {...this.state.contract, amount: e.target.value}})}
                type='number'
                hintText='Contract Amount'
                min={0}
                fullWidth/>
            </div>
            <div className='playerInput'>
              <TextField
                value={this.state.contract.exp}
                floatingLabelText='Contract Expiration'
                onChange={e => this.setState({contract: {...this.state.contract, exp: e.target.value}})}
                type='number'
                hintText='Contract Expiration'
                min={0}
                fullWidth/>
            </div>
            {draftInputs}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Player)
