export const fromGenerator = f => ({
  [Symbol.asyncIterator]: () => f(), 
});
