import * as aseq from './index.js';

it('skip should work for the empty case', async () => {
  const xs = await ([] 
    |> aseq.fromIterable 
    |> aseq.skip(2) 
    |> aseq.toArray);
  expect(xs).toEqual([]);
});

it('skip should work for a simple case 1', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.skip(2) 
    |> aseq.toArray);
  expect(xs).toEqual([ 3 ]);
});

it('skip should work for a simple case 2', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.skip(7) 
    |> aseq.toArray);
  expect(xs).toEqual([]);
});

it('skip should work for a simple case 3', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.skip(0) 
    |> aseq.toArray);
  expect(xs).toEqual([ 1, 2, 3 ]);
});
