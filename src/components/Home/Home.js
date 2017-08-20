import React, { Component } from 'react';
import GameAttributes from './GameAttributes'
import Teams from './Teams'
import Export from './Export'
import Nav from './Nav'
import './assets/styles/App.css';

class Home extends Component {

  constructor() {
    super()

    this.state = {
      tab: 'gameAttributes'
    }
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
            <GameAttributes />
          }
          {this.state.tab === 'teams' &&
            <Teams />
          }
          {this.state.tab === 'json' &&
            <Export />
          }
        </div>
      </div>
    );
  }
}

export default Home;
