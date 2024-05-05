// calculerSalaireTotal.test.js

const { calculerSalaireTotal } = require("./calculerSalaireTotal");

describe("Calculer le salaire total", () => {
  test("returns 0 when the array of employees is empty", () => {
    expect(calculerSalaireTotal([])).toBe(0);
  });

  test("calculates total salary for employees with positive salaries", () => {
    const employees = [
      { nom: "Alice", salaire: 3000 },
      { nom: "Bob", salaire: 4000 },
      { nom: "Charlie", salaire: 3500 },
    ];
    expect(calculerSalaireTotal(employees)).toBe(10500);
  });

  test("returns 0 when salaries of all employees are 0", () => {
    const employees = [
      { nom: "Alice", salaire: 0 },
      { nom: "Bob", salaire: 0 },
      { nom: "Charlie", salaire: 0 },
    ];
    expect(calculerSalaireTotal(employees)).toBe(0);
  });

  test("calculates total salary for employees with both positive and negative salaries", () => {
    const employees = [
      { nom: "Alice", salaire: 3000 },
      { nom: "Bob", salaire: -2000 },
      { nom: "Charlie", salaire: 1500 },
    ];
    expect(calculerSalaireTotal(employees)).toBe(2500);
  });

  test("calculates total salary for employees with decimal salaries", () => {
    const employees = [
      { nom: "Alice", salaire: 3000.5 },
      { nom: "Bob", salaire: 4000.75 },
      { nom: "Charlie", salaire: 3500.25 },
    ];
    expect(calculerSalaireTotal(employees)).toBeCloseTo(10501);
  });

  test("handles large numbers for salaries", () => {
    const employees = [
      { nom: "Alice", salaire: 1000000 },
      { nom: "Bob", salaire: 2000000 },
      { nom: "Charlie", salaire: 3000000 },
    ];
    expect(calculerSalaireTotal(employees)).toBe(6000000);
  });

  test("returns 0 when input is not an array", () => {
    expect(calculerSalaireTotal({})).toBe(0);
  });

  test("returns 0 when input is null", () => {
    expect(calculerSalaireTotal(null)).toBe(0);
  });

  test("returns 0 when input is undefined", () => {
    expect(calculerSalaireTotal()).toBe(0);
  });

  test("returns 0 when input is a string", () => {
    expect(calculerSalaireTotal("employees")).toBe(0);
  });
});
