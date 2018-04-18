import { fromGenerator } from './from-generator.js';

export const filter = f => {
  const fAsync = async x => f(x);
  return xs => fromGenerator(async function * () {
    for await (const x of xs) {
      if (await fAsync(x)) {
        yield x;
      }
    }
  });
};
