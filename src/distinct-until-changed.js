import { fromGenerator } from './from-generator.js';

export const distinctUntilChanged = xs => {
  let isFirst = true;
  let last = null;

  return fromGenerator(async function * () {
    for await (const x of xs) {
      if (isFirst || x != last) {
        yield x;

        isFirst = false;
        last = x;
      }
    }
  });
};
