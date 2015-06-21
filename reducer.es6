import { ADD_CONTEXT, REMOVE_CONTEXT } from './constants';
import i from 'seamless-immutable';

export default function contexts(state = i({}), action) {
  switch (action.type) {
    case ADD_CONTEXT: return add(state, action);
    case REMOVE_CONTEXT: return remove(state, action);
    default: return state;
  }
}

function add(state, {context: {app, context}}) {
  return state.merge({[app]: context()});
}

function remove(state, {app}) {
  const { [app]: context, ...rest } = state;
  return rest;
}
