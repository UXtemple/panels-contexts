import { add, remove, default as ContextsStore} from '../store';
import { APP, CONTEXT } from './context';
import { Store } from 'flummox';
import assert from 'assert';
import i from 'seamless-immutable';
import fakeFlux from './fake-flux';

describe('store', () => {
  describe('reducers', () => {
    it('#add', () => {
      const newState = add(i({}), CONTEXT);
      assert(newState.hasOwnProperty(CONTEXT.app));
    });

    it('#remove', () => {
      const newState = remove(i({[APP]: ''}), APP);
      assert(!newState.hasOwnProperty(APP));
    });
  });

  describe('Store', () => {
    it('is a flummox store', () => assert(ContextsStore.prototype instanceof Store));
    it('#find(app)', () => {
      const store = new ContextsStore(fakeFlux);
      store.state = i({[APP]: APP});
      assert(store.find(APP) === APP);
    });
  });
});
