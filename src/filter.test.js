import * as aseq from './index.js';

it('filter should work for the empty case', async () => {
  const xs = await ([] 
    |> aseq.fromIterable 
    |> aseq.filter(x => x % 2 == 0) 
    |> aseq.toArray);
  expect(xs).toEqual([]);
});

it('filter should work for a simple case', async () => {
  const xs = await ([ 1, 2, 3, 4, 5, 6 ] 
    |> aseq.fromIterable 
    |> aseq.filter(x => x % 2 == 0) 
    |> aseq.toArray);
  expect(xs).toEqual([ 2, 4, 6 ]);
});

it('filter should work for an async simple case', async () => {
  const isEvenAsync = async x => x % 2 == 0;
  const xs = await ([ 1, 2, 3, 4, 5, 6 ] 
    |> aseq.fromIterable 
    |> aseq.filter(isEvenAsync) 
    |> aseq.toArray);
  expect(xs).toEqual([ 2, 4, 6 ]);
});
