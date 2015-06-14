import { Actions, Store } from '../index';
import { APP, CONTEXT } from './context';
import { Flux } from 'flummox';
import assert from 'assert';
import i from 'seamless-immutable';

const ns = 'contexts';

class App extends Flux {
  constructor() {
    super();
    this.createActions(ns, Actions);
    this.createStore(ns, Store, this);
  }
}

describe('integration', () => {
  let actions;
  let flux;
  let store;

  beforeEach(() => {
    flux = new App();
    actions = flux.getActions(ns);
    store = flux.getStore(ns);
  });

  it('handles add actions', done => {
    store.once('change', () => done(assert(store.state.hasOwnProperty(APP))));
    actions.add(CONTEXT);
  });

  it('handles remove actions', done => {
    store.state = i({[APP]: APP});
    store.once('change', () => done(assert(!store.state.hasOwnProperty(APP))));
    actions.remove(APP);
  });
});
