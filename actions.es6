import { ADD, REMOVE } from './action-types';

export function add({app, context}) {
  return {
    type: ADD,
    payload: {
      app,
      context
    }
  }
}

export function remove(app) {
  return {
    type: REMOVE,
    payload: {
      app
    }
  }
}
