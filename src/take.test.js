import * as aseq from './index.js';

it('take should work for the empty case', async () => {
  const xs = await ([] 
    |> aseq.fromIterable 
    |> aseq.take(2) 
    |> aseq.toArray);
  expect(xs).toEqual([]);
});

it('take should work for a simple case 1', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.take(2) 
    |> aseq.toArray);
  expect(xs).toEqual([ 1, 2 ]);
});

it('take should work for a simple case 2', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.take(7) 
    |> aseq.toArray);
  expect(xs).toEqual([ 1, 2, 3 ]);
});

it('take should work for a simple case 3', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.take(0) 
    |> aseq.toArray);
  expect(xs).toEqual([]);
});
