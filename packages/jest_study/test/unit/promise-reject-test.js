test("test promise", () => {
  return expect(
    new Promise((resolve, reject) => {
      reject("error");
    })
  ).rejects.toEqual("error");
});
