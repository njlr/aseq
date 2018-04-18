import { fromGenerator } from './from-generator.js';

export const map = f => {
  const fAsync = async x => f(x);
  return xs => fromGenerator(async function * () {
    for await (const x of xs) {
      yield fAsync(x);
    }
  });
};
