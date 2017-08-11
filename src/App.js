import React, { Component } from 'react';
import { rosterRoot } from './data'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      roster: rosterRoot
    }
  }

  chStartingSeason = (action) => {
    this.setState({roster: {...this.state.roster, startingSeason: parseInt(action.target.value, 10)}})
  }

  chLuxuryPayroll = (action) => {
    let state = this.state.roster

    state.gameAttributes.forEach((obj, idx) => {
      if (obj.key === 'luxuryPayroll') {
        state.gameAttributes[idx].value = parseInt(action.target.value, 10)
        this.setState(state)
      }
    })
  }

  chLuxuryTax = (action) => {
    let state = this.state.roster

    state.gameAttributes.forEach((obj, idx) => {
      if (obj.key === 'luxuryTax') {
        state.gameAttributes[idx].value = parseInt(action.target.value, 10)
        this.setState(state)
      }
    })
  }

  chMaxContract = (action) => {
    let state = this.state.roster

    state.gameAttributes.forEach((obj, idx) => {
      if (obj.key === 'maxContract') {
        state.gameAttributes[idx].value = parseInt(action.target.value, 10)
        this.setState(state)
      }
    })
  }

  chMinPayroll = (action) => {
    let state = this.state.roster

    state.gameAttributes.forEach((obj, idx) => {
      if (obj.key === 'minPayroll') {
        state.gameAttributes[idx].value = parseInt(action.target.value, 10)
        this.setState(state)
      }
    })
  }

  chSalaryCap = (action) => {
    let state = this.state.roster

    state.gameAttributes.forEach((obj, idx) => {
      if (obj.key === 'salaryCap') {
        state.gameAttributes[idx].value = parseInt(action.target.value, 10)
        this.setState(state)
      }
    })
  }

  render() {
    return (
      <div className='app-container'>
        <div className='App'>
          <form>
            <FormGroup>
              <ControlLabel>Starting Season</ControlLabel>
              <FormControl
                type='number'
                min={0}
                value={this.state.roster.startingSeason}
                onChange={this.chStartingSeason} />
              <ControlLabel>Luxury Payroll</ControlLabel>
              <FormControl
                type='number'
                min={0}
                value={this.state.roster.gameAttributes.find(obj => {return obj.key === 'luxuryPayroll'}).value}
                onChange={this.chLuxuryPayroll} />
              <ControlLabel>Min Payroll</ControlLabel>
              <FormControl
                type='number'
                min={0}
                value={this.state.roster.gameAttributes.find(obj => {return obj.key === 'minPayroll'}).value}
                onChange={this.chMinPayroll} />
              <ControlLabel>Luxury Tax</ControlLabel>
              <FormControl
                type='number'
                min={0}
                value={this.state.roster.gameAttributes.find(obj => {return obj.key === 'luxuryTax'}).value}
                onChange={this.chLuxuryTax} />
              <ControlLabel>Max Contract</ControlLabel>
              <FormControl
                type='number'
                min={0}
                value={this.state.roster.gameAttributes.find(obj => {return obj.key === 'maxContract'}).value}
                onChange={this.chMaxContract} />
              <ControlLabel>Salary Cap</ControlLabel>
              <FormControl
                type='number'
                min={0}
                value={this.state.roster.gameAttributes.find(obj => {return obj.key === 'salaryCap'}).value}
                onChange={this.chSalaryCap} />
            </FormGroup>
          </form>

          <textarea
            value={ JSON.stringify(this.state.roster, null, 2) }
            className='export-textarea'
            readOnly
          />
        </div>
      </div>
    );
  }
}

export default App;
