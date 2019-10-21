import * as aseq from './index.js';

it('distinct should work for the empty case', async () => {
  const xs = await ([]
    |> aseq.fromIterable
    |> aseq.distinct
    |> aseq.toArray);

  expect(xs).toEqual([]);
});

it('distinct should work for a simple case 1', async () => {
  const xs = await ([ 1, 2, 3, 4, 5, 6 ]
    |> aseq.fromIterable
    |> aseq.distinct
    |> aseq.toArray);

  expect(xs).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});

it('distinct should work for a simple case 2', async () => {
  const xs = await ([ 1, 2, 1, 2, 3, 4, 5, 5, 6, 1 ]
    |> aseq.fromIterable
    |> aseq.distinct
    |> aseq.toArray);

  expect(xs).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});

it('distinct should work for a simple case 3', async () => {
  const xs = await ([ 1, 1, 1, 1, 1, 1 ]
    |> aseq.fromIterable
    |> aseq.distinct
    |> aseq.toArray);

  expect(xs).toEqual([ 1 ]);
});
