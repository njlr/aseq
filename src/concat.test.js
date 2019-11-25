import * as aseq from './index.js';

it('concat should work for the empty case', async () => {
  const xs = await ([]
    |> aseq.fromIterable
    |> aseq.concat([] |> aseq.fromIterable)
    |> aseq.toArray);

  expect(xs).toEqual([]);
});

it('concat should work for a simple case 1', async () => {
  const xs = await ([ 1, 2, 3 ]
    |> aseq.fromIterable
    |> aseq.concat([ 4, 5, 6 ] |> aseq.fromIterable)
    |> aseq.toArray);

  expect(xs).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});
