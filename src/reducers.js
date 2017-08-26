import { combineReducers } from 'redux';

import gameAttributes from './components/Home/GameAttributes/reducers'
import teams from './components/Home/Teams/reducers'
import players from './components/Home/Players/reducers'

const appReducer = combineReducers({
  gameAttributes,
  teams,
  players
});

export default appReducer;
