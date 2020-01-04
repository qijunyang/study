let root;
beforeEach(() => {
  root = 1;
});

afterEach(() => {
  root = null;
});

test("root is reset", () => {
  expect(root).toEqual(1);
  root = 2;
});

test("root is reset again", () => {
  expect(root).toEqual(1);
});
