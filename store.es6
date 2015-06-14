import { Store } from 'flummox';
import i from 'seamless-immutable';

export function add(state, {app, context}) {
  return state.merge({[app]: context()});
}
export function remove(state, app) {
  const { [app]: context, ...rest } = state;
  return rest;
}

export default class ContextsStore extends Store {
  static assignState(oldState, newState) { return newState }

  constructor(flux) {
    super();
    this.state = i({});
    const actionIds = flux.getActionIds('contexts');
    this.register(actionIds.add, context => this.setState(add(this.state, context)));
    this.register(actionIds.remove, app => this.setState(remove(this.state, app)));
  }

  find(app) { return this.state[app] }
}
