import { add } from "../../src/calc.js"
test("add", () => {
    expect(add(2, 3)).toEqual(5);
    expect(add("2", 3)).toEqual(5);
    expect(add(2, "3")).toEqual(5);
    expect(add("2", "3")).toEqual(5);
    expect(add(null, 1)).toEqual(1);
    expect(add(1, null)).toEqual(1);
    expect(add(undefined, 1)).toEqual(1);
    expect(add(1, undefined)).toEqual(1);
});