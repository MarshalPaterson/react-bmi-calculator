import * as types from '../constants/ActionTypes';

export function addHeight(text) {
  return { type: type.ADD_HEIGHT, text };
}

export function addWeight(text) {
  return { type: types.ADD_WEIGHT, text };
}
