const { sortDescending } = require("./sortDescending");

describe("sorts array", () => {});
test("sorts array [1, 2, 3] to [3, 2, 1]", () => {
  expect(sortDescending([1, 2, 3])).toEqual([3, 2, 1]);
});

test("sorts array [5, 3, 8, 1, 6] to [8, 6, 5, 3, 1]", () => {
  expect(sortDescending([5, 3, 8, 1, 6])).toEqual([8, 6, 5, 3, 1]);
});

test("sorts array [-1, -5, -3, -10] to [-1, -3, -5, -10]", () => {
  expect(sortDescending([-1, -5, -3, -10])).toEqual([-1, -3, -5, -10]);
});

test("sorts array [0, 0, 0, 0] to [0, 0, 0, 0]", () => {
  expect(sortDescending([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});

test("sorts array [1.5, 2.5, 3.5] to [3.5, 2.5, 1.5]", () => {
  expect(sortDescending([1.5, 2.5, 3.5])).toEqual([3.5, 2.5, 1.5]);
});

test("sorts array [-1.5, -2.5, -3.5] to [-1.5, -2.5, -3.5]", () => {
  expect(sortDescending([-1.5, -2.5, -3.5])).toEqual([-1.5, -2.5, -3.5]);
});

test("sorts array with a single element [10] to [10]", () => {
  expect(sortDescending([10])).toEqual([10]);
});

test("sorts array with a single element [-10] to [-10]", () => {
  expect(sortDescending([-10])).toEqual([-10]);
});

test("sorts array with large numbers [1000000, 2000000, 3000000] to [3000000, 2000000, 1000000]", () => {
  expect(sortDescending([1000000, 2000000, 3000000])).toEqual([
    3000000, 2000000, 1000000,
  ]);
});

test("sorts array with a mix of positive and negative numbers [1, -2, 3, -4, 5] to [5, 3, 1, -2, -4]", () => {
  expect(sortDescending([1, -2, 3, -4, 5])).toEqual([5, 3, 1, -2, -4]);
});
