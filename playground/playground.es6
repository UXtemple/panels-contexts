import * as PanelsContexts from '../index';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';

const redux = createRedux({contexts: PanelsContexts.reducer});

const { add } = PanelsContexts.Actions;
const apps = [
  {app: 'app1', context() { return 'context for app1'; }},
  {app: 'app2', context() { return 'context for app2'; }}
].forEach(context => redux.dispatch(add(context)));

window.Playground = {
  redux,
  PanelsContexts
};

console.log('Welcome to panels-contexts playground.');
console.log('https://contexts.usepanels.com');
console.log('Playground module', Playground);

console.log('contexts:', redux.getState('contexts').contexts);
