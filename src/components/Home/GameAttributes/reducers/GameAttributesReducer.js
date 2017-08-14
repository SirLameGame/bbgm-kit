import {Record} from 'immutable';
import * as types from '../constants';

const gameAttributes = new Record({
  'luxuryPayroll': 0,
  'luxuryTax': 0,
  'maxContract': 0,
  'minPayroll': 0,
  'salaryCap': 0,
  'startingSeason': 2017
});

const initialState = new gameAttributes();

const gameAttributesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_STARTING_SEASON:
      return state.set('startingSeason', parseInt(action.payload, 10))
    case types.UPDATE_LUXURY_PAYROLL:
      return state.set('luxuryPayroll', parseInt(action.payload, 10))
    case types.UPDATE_MIN_PAYROLL:
      return state.set('minPayroll', parseInt(action.payload, 10))
    case types.UPDATE_LUXURY_TAX:
      return state.set('luxuryTax', parseInt(action.payload, 10))
    case types.UPDATE_MAX_CONTRACT:
      return state.set('maxContract', parseInt(action.payload, 10))
    case types.UPDATE_SALARY_CAP:
      return state.set('salaryCap', parseInt(action.payload, 10))
    default:
      return state;
  }
}

export default gameAttributesReducer;
