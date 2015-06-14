import { add, remove } from '../actions';
import { APP, CONTEXT } from './context';
import assert from 'assert';

describe('actions', () => {
  it('#add', () => assert(add(CONTEXT) === CONTEXT));
  it('#remove', () => assert(remove(APP) === APP));
});
