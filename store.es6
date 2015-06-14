import { Store } from 'flummox';
import i from 'seamless-immutable';

export function add({app, context}, payload, state) {
  return state.merge({[app]: context()});
}
export function remove(app, payload, state) {
  const { [app]: context, ...rest } = state;
  return rest;
}

export default class ContextsStore extends Store {
  static assignState(oldState, newState) { return newState }

  constructor(flux) {
    super();
    this.state = i({});
    const actionIds = flux.getActionIds('contexts');
    this.register(actionIds.add, add);
    this.register(actionIds.remove, remove);
  }

  find(app) { return this.state[app] }
}
