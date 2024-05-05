const { maxNumber } = require("./maxNumber");

describe("finds the maximum number in array", () => {
  test("finds the maximum number in array [1, 2, 3] to be 3", () => {
    expect(maxNumber([1, 2, 3])).toBe(3);
  });

  test("finds the maximum number in array [5, 3, 8, 1, 6] to be 8", () => {
    expect(maxNumber([5, 3, 8, 1, 6])).toBe(8);
  });

  test("finds the maximum number in array [-1, -5, -3, -10] to be -1", () => {
    expect(maxNumber([-1, -5, -3, -10])).toBe(-1);
  });

  test("finds the maximum number in array [0, 0, 0, 0] to be 0", () => {
    expect(maxNumber([0, 0, 0, 0])).toBe(0);
  });

  test("finds the maximum number in array [1.5, 2.5, 3.5] to be 3.5", () => {
    expect(maxNumber([1.5, 2.5, 3.5])).toBe(3.5);
  });

  test("finds the maximum number in array [-1.5, -2.5, -3.5] to be -1.5", () => {
    expect(maxNumber([-1.5, -2.5, -3.5])).toBe(-1.5);
  });

  test("finds the maximum number in array with a single element [10] to be 10", () => {
    expect(maxNumber([10])).toBe(10);
  });

  test("finds the maximum number in array with a single element [-10] to be -10", () => {
    expect(maxNumber([-10])).toBe(-10);
  });

  test("finds the maximum number in array with large numbers [1000000, 2000000, 3000000] to be 3000000", () => {
    expect(maxNumber([1000000, 2000000, 3000000])).toBe(3000000);
  });

  test("finds the maximum number in array with a mix of positive and negative numbers [1, -2, 3, -4, 5] to be 5", () => {
    expect(maxNumber([1, -2, 3, -4, 5])).toBe(5);
  });
});
