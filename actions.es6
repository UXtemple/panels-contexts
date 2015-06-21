import { ADD_CONTEXT, REMOVE_CONTEXT } from './constants';

export function add(context) {
  return {
    type: ADD_CONTEXT,
    context
  };
}

export function remove(app) {
  return {
    type: REMOVE_CONTEXT,
    app
  };
}
