// uniqueNumbers.test.js

const { uniqueNumbers } = require("./uniqueNumbers");

describe("returns unique numbers", () => {
  test("returns unique numbers [1, 2, 3] as [1, 2, 3]", () => {
    expect(uniqueNumbers([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("returns unique numbers [1, 2, 2, 3, 3, 3] as [1, 2, 3]", () => {
    expect(uniqueNumbers([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test("returns unique numbers [5, 3, 8, 1, 6] as [5, 3, 8, 1, 6]", () => {
    expect(uniqueNumbers([5, 3, 8, 1, 6])).toEqual([5, 3, 8, 1, 6]);
  });

  test("returns unique numbers [-1, -5, -3, -1, -5] as [-1, -5, -3]", () => {
    expect(uniqueNumbers([-1, -5, -3, -1, -5])).toEqual([-1, -5, -3]);
  });

  test("returns unique numbers [0, 0, 0, 0] as [0]", () => {
    expect(uniqueNumbers([0, 0, 0, 0])).toEqual([0]);
  });

  test("returns unique numbers [1.5, 2.5, 3.5, 2.5, 3.5] as [1.5, 2.5, 3.5]", () => {
    expect(uniqueNumbers([1.5, 2.5, 3.5, 2.5, 3.5])).toEqual([1.5, 2.5, 3.5]);
  });

  test("returns unique numbers with a single element [10] as [10]", () => {
    expect(uniqueNumbers([10])).toEqual([10]);
  });

  test("returns unique numbers with a single element [-10] as [-10]", () => {
    expect(uniqueNumbers([-10])).toEqual([-10]);
  });

  test("returns unique numbers [1000000, 2000000, 3000000] as [1000000, 2000000, 3000000]", () => {
    expect(uniqueNumbers([1000000, 2000000, 3000000])).toEqual([
      1000000, 2000000, 3000000,
    ]);
  });

  test("returns unique numbers [1, -2, 3, -2, 5] as [1, -2, 3, 5]", () => {
    expect(uniqueNumbers([1, -2, 3, -2, 5])).toEqual([1, -2, 3, 5]);
  });
});
