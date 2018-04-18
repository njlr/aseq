import { fromGenerator } from './from-generator.js'

export const fromIterable = xs => fromGenerator(async function * () {
  yield * xs;
});
