import { fromGenerator } from './from-generator.js';

export const flatMap = f => {
  const fAsync = async x => f(x);
  return xs => fromGenerator(async function * () {
    for await (const x of xs) {
      yield * await fAsync(x);
    }
  });
};
