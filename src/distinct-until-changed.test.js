import * as aseq from './index.js';

it('distinctUntilChanged should work for the empty case', async () => {
  const xs = await (
    []
    |> aseq.fromIterable
    |> aseq.distinctUntilChanged
    |> aseq.toArray
  );

  expect(xs).toEqual([]);
});

it('distinctUntilChanged should work for a simple case 1', async () => {
  const xs = await (
    [ 1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6 ]
    |> aseq.fromIterable
    |> aseq.distinctUntilChanged
    |> aseq.toArray
  );

  expect(xs).toEqual([ 1, 2, 3, 4, 5, 6 ]);
});

it('distinctUntilChanged should work for a simple case 2', async () => {
  const xs = await (
    [ 1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 2 ]
    |> aseq.fromIterable
    |> aseq.distinctUntilChanged
    |> aseq.toArray
  );

  expect(xs).toEqual([ 1, 2, 3, 4, 5, 6, 2 ]);
});
