import Util from "../../src/util.ts";

test("it should return full name", () => {
  expect(Util.toName("Tom", "Wang")).toEqual("Tom Wang");
});
