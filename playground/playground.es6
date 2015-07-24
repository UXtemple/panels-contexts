import * as PanelsContexts from '../index';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({contexts: PanelsContexts.reducer});
const store = createStore(reducer);

const { add } = PanelsContexts.actions;
[
  {app: 'app1', context() { return 'context for app1'; }},
  {app: 'app2', context() { return 'context for app2'; }}
].forEach(context => store.dispatch(add(context)));

window.Playground = {
  store,
  PanelsContexts
};

console.log('Welcome to panels-contexts playground.');
console.log('https://contexts.usepanels.com');
console.log('Playground module', window.Playground);

console.log('contexts:', store.getState().contexts);
