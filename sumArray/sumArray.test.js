const { sumArray } = require("./sumArray.js");

describe("Somme de tous les éléments d'un tableau", () => {
  test("La somme des éléments du tableau [1, 2, 3] donne 6", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  test("La somme des éléments d'un tableau vide donne 0", () => {
    expect(sumArray([])).toBe(0);
  });

  test("La somme des éléments du tableau [-1, -2, -3] donne -6", () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
  });

  test("La somme des éléments du tableau [0, 0, 0] donne 0", () => {
    expect(sumArray([0, 0, 0])).toBe(0);
  });

  test("La somme des éléments du tableau [1.5, 2.5, 3.5] donne 7.5", () => {
    expect(sumArray([1.5, 2.5, 3.5])).toBeCloseTo(7.5);
  });

  test("La somme des éléments du tableau [-1.5, -2.5, -3.5] donne -7.5", () => {
    expect(sumArray([-1.5, -2.5, -3.5])).toBeCloseTo(-7.5);
  });

  test("La somme des éléments du tableau [10] donne 10", () => {
    expect(sumArray([10])).toBe(10);
  });

  test("La somme des éléments du tableau [-10] donne -10", () => {
    expect(sumArray([-10])).toBe(-10);
  });

  test("La somme des éléments du tableau [1000000, 2000000, 3000000] donne 6000000", () => {
    expect(sumArray([1000000, 2000000, 3000000])).toBe(6000000);
  });

  test("La somme des éléments du tableau [1, -2, 3, -4, 5] donne 3", () => {
    expect(sumArray([1, -2, 3, -4, 5])).toBe(3);
  });
});
