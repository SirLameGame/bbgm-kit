import React, { Component } from 'react';
import { rosterRoot } from './data'
import GameAttributes from './GameAttributes'
import { team } from './data'
import Nav from './Nav'
import Teams from './Teams'
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      roster: rosterRoot,
      tab: 'gameAttributes'
    }
  }

  chStartingSeason = (action) => {
    this.setState({roster: {...this.state.roster, startingSeason: parseInt(action.target.value, 10)}})
  }

  chGameAttribute = (action) => {
    let state = this.state.roster

    state.gameAttributes.forEach((obj, idx) => {
      if (obj.key === action.target.className.split(' ')[0]) {
        state.gameAttributes[idx].value = parseInt(action.target.value, 10)
        this.setState(state)
      }
    })
  }

  newTeam = (action) => {
    action.preventDefault()
    let state = this.state
    let newTeam = team

    state.roster.teams.push(newTeam)

    this.setState(state)
  }

  navSelect = (e) => {
    if (e !== 'download') {
      this.setState({tab: e})
    }
  }

  render() {
    return (
      <div className='app-container'>
        <div className='App'>
          <Nav navSelect={this.navSelect} roster={this.state.roster}/>
          {this.state.tab === 'gameAttributes' &&
            <GameAttributes
              chStartingSeason={this.chStartingSeason}
              chGameAttribute={this.chGameAttribute}
              gameAttributes={this.state.roster.gameAttributes}
              startingSeason={this.state.roster.startingSeason}/>
          }
          {this.state.tab === 'teams' &&
            <Teams
              teams={this.state.roster.teams}
              newTeam={this.newTeam}/>
          }
          {this.state.tab === 'json' &&
            <textarea
              value={JSON.stringify(this.state.roster, null, 2)}
              className='export-textarea'
              readOnly
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
