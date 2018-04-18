import { fromGenerator } from './from-generator.js';

export const skip = n => {
  if (!Number.isSafeInteger(n)) {
    throw new TypeError('n must be a number');
  }
  if (n < 0) {
    throw new RangeError('n must be at least zero');
  }
  return xs => fromGenerator(async function * () {
    let i = 0;
    for await (const x of xs) {
      if (i >= n) {
        yield x;
      } else {
        i++;
      }
    }
  });
};
