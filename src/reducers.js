import { combineReducers } from 'redux';

import gameAttributes from './components/Home/GameAttributes/reducers'
import teams from './components/Home/Teams/reducers'
import players from './components/Home/Players/reducers'
import imports from './components/Home/Imports/reducers'

const appReducer = combineReducers({
  imports,
  gameAttributes,
  teams,
  players,
});

export default appReducer;
