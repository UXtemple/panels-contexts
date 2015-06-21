import { add, remove } from '../actions';
import { ADD_CONTEXT, REMOVE_CONTEXT } from '../constants';
import { APP, CONTEXT } from './context';
import assert from 'assert';

describe('actions', () => {
  it('#add', () => {
    const {type, context} = add(CONTEXT);
    assert(type === ADD_CONTEXT, 'type');
    assert(context === CONTEXT, 'payload');
  });

  it('#remove', () => {
    const {type, app} = remove(APP);
    assert(type === REMOVE_CONTEXT, 'type');
    assert(app === APP, 'payload');
  });
});
