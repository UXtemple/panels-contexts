import { add, remove } from '../actions';
import { ADD, REMOVE } from '../action-types';
import { APP, CONTEXT } from './context';
import assert from 'assert';

describe('actions', () => {
  it('#add', () => {
    const {type, payload: {app, context}} = add(CONTEXT);
    assert(type === ADD, 'type');
    assert(app === CONTEXT.app, 'payload: app');
    assert(context === CONTEXT.context, 'payload: context');
  });

  it('#remove', () => {
    const {type, payload: {app}} = remove(APP);
    assert(type === REMOVE, 'type');
    assert(app === CONTEXT.app, 'payload: app');
  });
});
