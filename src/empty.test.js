import * as aseq from './index.js';

it('empty should be... empty', async () => {
  const xs = await (
    aseq.empty
    |> aseq.toArray
  );

  expect(xs).toEqual([]);
});
