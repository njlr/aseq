import { fromGenerator } from './from-generator.js';

export const preload = (n = 1) => {
  if (!Number.isSafeInteger(n)) {
    throw new TypeError('n must be an integer');
  }

  if (n < 1) {
    throw new Error('n must be at least 1');
  }

  return xs => fromGenerator(async function * () {
    if (!xs[Symbol.asyncIterator]) {
      throw new TypeError('xs must be async iterable');
    }

    const iterator = xs[Symbol.asyncIterator]();

    const pending = [];

    const extendPending = () => {
      while (pending.length < n) {
        pending.push(iterator.next());
      }
    };

    while (true) {
      extendPending();

      const { value, done = true } = await pending.shift();

      if (done) {
        break;
      } else {
        yield value;
      }
    }
  });
};
