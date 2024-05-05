const { isEven } = require("./isEven");

describe("Verifie si un nombre est pair ou impair", () => {
  test("Verifie si 2 est pair", () => {
    expect(isEven(2)).toBe(true);
  });

  test("Verifie si 3 est pair", () => {
    expect(isEven(3)).toBe(false);
  });

  test("Verifie si -2 est pair", () => {
    expect(isEven(-2)).toBe(true);
  });

  test("Verifie si -3 est pair", () => {
    expect(isEven(-3)).toBe(false);
  });

  test("Verifie si 0 est pair", () => {
    expect(isEven(0)).toBe(true);
  });

  test("Verifie si 10 est pair", () => {
    expect(isEven(10)).toBe(true);
  });

  test("Verifie si -10 est pair", () => {
    expect(isEven(-10)).toBe(true);
  });

  test("Verifie si 1.5 est pair", () => {
    expect(isEven(1.5)).toBe(false);
  });

  test("Verifie si -1.5 est pair", () => {
    expect(isEven(-1.5)).toBe(false);
  });

  test("Verifie si 1000000 est pair", () => {
    expect(isEven(1000000)).toBe(true);
  });
});
