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

export const updateDivision  = (div: Object) => ({
  type: types.UPDATE_DIVISION,
  payload: div
})

export const deleteDivision = (divuuid: String) => ({
  type: types.DELETE_DIVISION,
  payload: divuuid
})

export const updateConference  = (conf: Object) => ({
  type: types.UPDATE_CONFERENCE,
  payload: conf
})

export const deleteConference  = (confuuid: String) => ({
  type: types.DELETE_CONFERENCE,
  payload: confuuid
})

export const clearAttributes = () => ({
  type: types.CLEAR_ATTRIBUTES,
})
