import { combineReducers } from 'redux';

import gameAttributes from './components/Home/GameAttributes/reducers/GameAttributesReducer'

const appReducer = combineReducers({
  gameAttributes
});

export default appReducer;
