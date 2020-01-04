test("async test", done => {
  setTimeout(() => {
    expect(1).toEqual(1);
    done();
  }, 500);
});
