import { ADD, REMOVE } from './action-types';

export function add({app, context}) {
  return {
    type: ADD,
    app,
    context
  }
}

export function remove(app) {
  return {
    type: REMOVE,
    app
  }
}
