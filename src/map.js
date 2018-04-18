import { fromGenerator } from './from-generator.js';

export const map = f => xs => fromGenerator(async function * () {
  for await (const x of xs) {
    yield f(x);
  }
});
