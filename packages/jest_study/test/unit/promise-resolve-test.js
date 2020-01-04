test("test promise", () => {
  return expect(
    new Promise(resolve => {
      resolve(1);
    })
  ).resolves.toEqual(1);
});
