import { fromGenerator } from './from-generator.js';

export const distinct = xs => {
  const seen = new Set();

  return fromGenerator(async function * () {
    for await (const x of xs) {
      if (!seen.has(x)) {
        yield x;
        seen.add(x);
      }
    }
  });
};
