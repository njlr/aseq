import * as aseq from './index.js';

it('preload should work for the empty case', async () => {
  const xs = await ([]
    |> aseq.fromIterable
    |> aseq.preload(20)
    |> aseq.toArray);
  expect(xs).toEqual([]);
});

it('preload should work for a simple case 1', async () => {
  const xs = await ([ 1, 2, 3 ]
    |> aseq.fromIterable
    |> aseq.preload(2)
    |> aseq.toArray);
  expect(xs).toEqual([ 1, 2, 3 ]);
});

it('preload should work for a simple case 2', async () => {
  const xs = await ([ 1, 2, 3 ]
    |> aseq.fromIterable
    |> aseq.preload(200)
    |> aseq.toArray);
  expect(xs).toEqual([ 1, 2, 3 ]);
});

it('preload should work for a simple case 3', async () => {
  let counter = 0;

  const xs = await (
    aseq.fromGenerator(async function * () {
      for (let i = 0; i < 999; i++) {
        counter = counter + 1;
        yield i + 1;
      }
    })
    |> aseq.preload(1)
    |> aseq.take(3)
    |> aseq.toArray
  );

  expect(xs).toEqual([ 1, 2, 3 ]);
  expect(counter).toEqual(4);
});
