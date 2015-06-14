import * as PanelsContexts from '../index';
import { Flux } from 'flummox';

class App extends Flux {
  constructor() {
    super();
    this.createActions('contexts', PanelsContexts.Actions);
    this.createStore('contexts', PanelsContexts.Store, this);
  }
}

window.Playground = {
  flux: new App(),
  PanelsContexts,
  getStore() { return flux.getStore('contexts') }
};

console.log('Welcome to panels-contexts playground.');
console.log('https://contexts.usepanels.com');
console.log('Playground module', Playground);
