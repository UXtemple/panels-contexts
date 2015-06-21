import { APP } from './context';
import { find } from '../getters';
import assert from 'assert';

describe('getters', () => {
  it('#find', () => assert(find({[APP]: APP}, APP) === APP));
});
