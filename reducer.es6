import { ADD, REMOVE } from './action-types';
import i from 'seamless-immutable';

export default function contexts(state = i({}), {type, ...payload}) {
  switch (type) {
    case ADD: return add(state, payload);
    case REMOVE: return remove(state, payload);
    default: return state;
  }
}

function add(state, {app, context}) {
  return state.merge({[app]: context()});
}

function remove(state, {app}) {
  const { [app]: context, ...rest } = state;
  return rest;
}
