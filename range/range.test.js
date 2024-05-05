// range.test.js

const { range } = require("./range");

describe("calculates range of numbers in array", () => {
  test("calculates range of numbers in array [1, 2, 3] as 2", () => {
    expect(range([1, 2, 3])).toBe(2);
  });

  test("calculates range of numbers in array [5, 3, 8, 1, 6] as 7", () => {
    expect(range([5, 3, 8, 1, 6])).toBe(7);
  });

  test("calculates range of numbers in array [-1, -5, -3, -10] as 9", () => {
    expect(range([-1, -5, -3, -10])).toBe(9);
  });

  test("calculates range of numbers in array [0, 0, 0, 0] as 0", () => {
    expect(range([0, 0, 0, 0])).toBe(0);
  });

  test("calculates range of numbers in array [1.5, 2.5, 3.5] as 2", () => {
    expect(range([1.5, 2.5, 3.5])).toBeCloseTo(2);
  });

  test("calculates range of numbers in array [-1.5, -2.5, -3.5] as 2", () => {
    expect(range([-1.5, -2.5, -3.5])).toBeCloseTo(2);
  });

  test("calculates range of numbers in array with a single element [10] as 0", () => {
    expect(range([10])).toBe(0);
  });

  test("calculates range of numbers in array with a single element [-10] as 0", () => {
    expect(range([-10])).toBe(0);
  });

  test("calculates range of numbers in array with large numbers [1000000, 2000000, 3000000] as 2000000", () => {
    expect(range([1000000, 2000000, 3000000])).toBe(2000000);
  });

  test("calculates range of numbers in array with a mix of positive and negative numbers [1, -2, 3, -4, 5] as 9", () => {
    expect(range([1, -2, 3, -4, 5])).toBe(9);
  });
});
