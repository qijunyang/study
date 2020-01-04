test("test promise", () => {
  return new Promise(resolve => {
    resolve(1);
  }).then(data => {
    expect(data).toEqual(1);
  });
});
