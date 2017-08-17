import { combineReducers } from 'redux';

import gameAttributes from './components/Home/GameAttributes/reducers/GameAttributesReducer'
import teams from './components/Home/Teams/reducers'

const appReducer = combineReducers({
  gameAttributes,
  teams
});

export default appReducer;
