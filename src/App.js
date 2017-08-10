import React, { Component } from 'react';
import { rosterRoot } from './data'
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

  render() {
    return (
      <div className='app-container'>
        <div className='App'>

          <label>Starting Season</label>
          <input
            type='number'
            value={this.state.roster.startingSeason}
            onChange={this.chStartingSeason} />

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
