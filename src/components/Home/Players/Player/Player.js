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

    this.state = {
      ...player
    }
  }

  render() {

    let {
      history,
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

    return (
      <div className='edit-player-container'>
        <div className='create-player-actions'>
          <FlatButton onClick={() => history.push('/players')}>Cancel</FlatButton>
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
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Player)
