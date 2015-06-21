import { ADD_CONTEXT, REMOVE_CONTEXT } from '../constants';
import { APP, CONTEXT } from './context';
import assert from 'assert';
import i from 'seamless-immutable';
import reducer from '../reducer';

describe('reducer', () => {
  it('handles ADD_CONTEXT', () => {
    const newState = reducer(i({}), {type: ADD_CONTEXT, context: CONTEXT});
    assert(newState.hasOwnProperty(CONTEXT.app));
  });

  it('handles REMOVE_CONTEXT', () => {
    const newState = reducer(i({[APP]: ''}), {type: REMOVE_CONTEXT, app: APP});
    assert(!newState.hasOwnProperty(APP));
  });
});
