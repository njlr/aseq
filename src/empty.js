import { fromGenerator } from './from-generator.js';

export const empty = fromGenerator(async function * () { });
