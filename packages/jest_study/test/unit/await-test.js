const get = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  });
};

test("test await async function", async () => {
  const data = await get();
  expect(data).toEqual(1);
});

test("test await expect", async () => {
  await expect(get()).resolves.toEqual(1);
});
