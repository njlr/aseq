import * as aseq from './index.js';

it('map should work for the empty case', async () => {
  const xs = await ([] 
    |> aseq.fromIterable 
    |> aseq.map(x => x * 2) 
    |> aseq.toArray);
  expect(xs).toEqual([]);
});

it('map should work for a simple case', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.map(x => x * 2) 
    |> aseq.toArray);
  expect(xs).toEqual([ 2, 4, 6 ]);
});

it('map should work for an async simple case', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.map(async x => x * 2) 
    |> aseq.toArray);
  expect(xs).toEqual([ 2, 4, 6 ]);
});