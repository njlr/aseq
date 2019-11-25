import { fromGenerator } from './from-generator.js';

export const concat = xs => ys => {
  return fromGenerator(async function * () {
    yield* ys;
    yield* xs;
  });
};
