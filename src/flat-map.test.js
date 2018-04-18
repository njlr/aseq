import * as aseq from './index.js';

it('flatMap should work for the empty case', async () => {
  const xs = await ([] 
    |> aseq.fromIterable 
    |> aseq.flatMap(x => [ x, -x ]) 
    |> aseq.toArray);
  expect(xs).toEqual([]);
});

it('flatMap should work for a simple case 1', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.flatMap(x => aseq.fromIterable([ x ])) 
    |> aseq.toArray);
  expect(xs).toEqual([ 1, 2, 3 ]);
});

it('flatMap should work for a simple case 2', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.flatMap(x => aseq.fromIterable([ x, -x ])) 
    |> aseq.toArray);
  expect(xs).toEqual([ 1, -1, 2, -2, 3, -3 ]);
});

it('flatMap should work for a simple case 3', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.flatMap(x => [ x, -x ]) 
    |> aseq.toArray);
  expect(xs).toEqual([ 1, -1, 2, -2, 3, -3 ]);
});

it('flatMap should work for an async simple case', async () => {
  const xs = await ([ 1, 2, 3 ] 
    |> aseq.fromIterable 
    |> aseq.flatMap(async x => [ x, -x ]) 
    |> aseq.toArray);
  expect(xs).toEqual([ 1, -1, 2, -2, 3, -3 ]);
});
