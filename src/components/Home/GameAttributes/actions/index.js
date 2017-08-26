import * as types from '../constants';

export const updateAttribute = (key: String, value: Number) => ({
  type: types.UPDATE_ATTRIBUTE,
  payload: {
    key: key,
    value: value,
  }
})

export const createConference  = (conf: Object) => ({
  type: types.CREATE_CONFERENCE,
  payload: conf
})

export const createDivision  = (div: Object) => ({
  type: types.CREATE_DIVISION,
  payload: div
})

export const clearAttributes = () => ({
  type: types.CLEAR_ATTRIBUTES,
})
