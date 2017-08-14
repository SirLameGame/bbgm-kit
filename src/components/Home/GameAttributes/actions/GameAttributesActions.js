import * as types from '../constants';

export const updateStartingSeason = (value: Number) => ({
  type: types.UPDATE_STARTING_SEASON,
  payload: value
});

export const updateLuxuryPayroll = (value: Number) => ({
  type: types.UPDATE_LUXURY_PAYROLL,
  payload: value
});

export const updateMinPayroll = (value: Number) => ({
  type: types.UPDATE_MIN_PAYROLL,
  payload: value
});

export const updateLuxuryTax = (value: Number) => ({
  type: types.UPDATE_LUXURY_TAX,
  payload: value
});

export const updateMaxContract = (value: Number) => ({
  type: types.UPDATE_MAX_CONTRACT,
  payload: value
});

export const updateSalaryCap = (value: Number) => ({
  type: types.UPDATE_SALARY_CAP,
  payload: value
});
