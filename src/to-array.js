export const toArray = async xs => {
  const ys = [];
  for await (const x of xs) {
    ys.push(x);
  }
  return ys;
};
