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


  render() {
    return (
      <div className='app-container'>
        <div className='App'>
          <textarea
            value={ JSON.stringify(this.state.roster, null, 2) }
            className='export-textarea'
            readonly
          />
        </div>
      </div>
    );
  }
}

export default App;
