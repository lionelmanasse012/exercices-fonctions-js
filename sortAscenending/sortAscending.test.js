// sortAscending.test.js

const { sortAscending } = require("./sortAscending");

describe("sorts array", () => {
  test("sorts array [3, 2, 1] to [1, 2, 3]", () => {
    expect(sortAscending([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("sorts array [5, 3, 8, 1, 6] to [1, 3, 5, 6, 8]", () => {
    expect(sortAscending([5, 3, 8, 1, 6])).toEqual([1, 3, 5, 6, 8]);
  });

  test("sorts array [-1, -5, -3, -10] to [-10, -5, -3, -1]", () => {
    expect(sortAscending([-1, -5, -3, -10])).toEqual([-10, -5, -3, -1]);
  });

  test("sorts array [0, 0, 0, 0] to [0, 0, 0, 0]", () => {
    expect(sortAscending([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
  });

  test("sorts array [1.5, 2.5, 3.5] to [1.5, 2.5, 3.5]", () => {
    expect(sortAscending([1.5, 2.5, 3.5])).toEqual([1.5, 2.5, 3.5]);
  });

  test("sorts array [-1.5, -2.5, -3.5] to [-3.5, -2.5, -1.5]", () => {
    expect(sortAscending([-1.5, -2.5, -3.5])).toEqual([-3.5, -2.5, -1.5]);
  });

  test("sorts array with a single element [10] to [10]", () => {
    expect(sortAscending([10])).toEqual([10]);
  });

  test("sorts array with a single element [-10] to [-10]", () => {
    expect(sortAscending([-10])).toEqual([-10]);
  });

  test("sorts array with large numbers [1000000, 2000000, 3000000] to [1000000, 2000000, 3000000]", () => {
    expect(sortAscending([1000000, 2000000, 3000000])).toEqual([
      1000000, 2000000, 3000000,
    ]);
  });

  test("sorts array with a mix of positive and negative numbers [1, -2, 3, -4, 5] to [-4, -2, 1, 3, 5]", () => {
    expect(sortAscending([1, -2, 3, -4, 5])).toEqual([-4, -2, 1, 3, 5]);
  });
});
