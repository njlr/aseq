import { fromGenerator } from './from-generator.js'

export const fromGenerator = xs => fromGenerator(async function * () {
  yield * xs;
});
