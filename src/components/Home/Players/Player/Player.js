import React, { PureComponent } from 'react'
// import Button from 'material-ui/Button'
// import { player } from './reducers'
// import { Toolbar } from 'react-data-grid-addons'
// import ReactDataGrid from 'react-data-grid'
import { withRouter } from 'react-router-dom'
import { TextField, Button } from 'material-ui'
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
  render() {

    let {
      history,
      updatePlayer,
    } = this.props

    let playerInputs = [
      { input: 'Name', type: 'text', helper: 'Name of the player', placeholder: 'Sir LameGame',
        label: 'Players Name'},
      { input: 'College', type: 'text', helper: 'Players College', placeholder: 'Georgetown',
        label: 'College'},
    ]

    let inputs = playerInputs.map((input, idx) => (
      <div key={input.input} className='playerInput'>
          <TextField
            value={input.input}
            label={ input.label }
            onChange={event => {}}
            type={input.type}
            helperText={input.helper}
            placeholder={input.placeholder}
            min={input.min}
            className={input.input}
            fullWidth/>
      </div>
    ))

    return (
      <div className='edit-player-container'>
        <div className='create-player-actions'>
          <Button onClick={() => history.push('/players')}>Cancel</Button>
        </div>
        <div className='edit-player'>
          <div className='edit-player-inputs'>
            { inputs }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Player)
