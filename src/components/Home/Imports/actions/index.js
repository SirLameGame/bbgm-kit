import * as types from '../constants';

export const setLoadingMessage = (message: String) => ({
  type: types.SET_LOADING_MESSAGE,
  payload: message
});
