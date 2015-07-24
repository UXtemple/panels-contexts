import { ADD, REMOVE } from '../action-types';
import { APP, CONTEXT } from './context';
import assert from 'assert';
import i from 'seamless-immutable';
import reducer from '../reducer';

describe('reducer', () => {
  it('handles ADD', () => {
    const newState = reducer(i({}), {type: ADD, payload: CONTEXT});
    assert(newState.hasOwnProperty(CONTEXT.app));
  });

  it('handles REMOVE', () => {
    const newState = reducer(i({[APP]: ''}), {type: REMOVE, payload: {app: APP}});
    assert(!newState.hasOwnProperty(APP));
  });
});
