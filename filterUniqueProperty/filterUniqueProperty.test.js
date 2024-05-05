// filterUniqueProperty.test.js

const { filterUniqueProperty } = require("./filterUniqueProperty");

describe("filters objects with unique", () => {
  test('filters objects with unique "id" property', () => {
    const input = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 1, name: "David" },
      { id: 4, name: "Eve" },
      { id: 5, name: "Frank" },
    ];
    const output = [
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Eve" },
      { id: 5, name: "Frank" },
    ];
    expect(filterUniqueProperty(input, "id")).toEqual(output);
  });

  test('filters objects with unique "name" property', () => {
    const input = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Alice" },
      { id: 4, name: "David" },
      { id: 5, name: "David" },
      { id: 6, name: "Frank" },
    ];
    const output = [
      { id: 2, name: "Bob" },
      { id: 6, name: "Frank" },
    ];
    expect(filterUniqueProperty(input, "name")).toEqual(output);
  });

  test('filters objects with unique "age" property', () => {
    const input = [
      { id: 1, age: 25 },
      { id: 2, age: 30 },
      { id: 3, age: 25 },
      { id: 4, age: 35 },
      { id: 5, age: 40 },
      { id: 6, age: 30 },
    ];
    const output = [
      { id: 1, age: 25 },
      { id: 4, age: 35 },
      { id: 5, age: 40 },
    ];
    expect(filterUniqueProperty(input, "age")).toEqual(output);
  });

  test('filters objects with unique "email" property', () => {
    const input = [
      { id: 1, email: "alice@example.com" },
      { id: 2, email: "bob@example.com" },
      { id: 3, email: "alice@example.com" },
      { id: 4, email: "david@example.com" },
      { id: 5, email: "david@example.com" },
      { id: 6, email: "frank@example.com" },
    ];
    const output = [
      { id: 2, email: "bob@example.com" },
      { id: 6, email: "frank@example.com" },
    ];
    expect(filterUniqueProperty(input, "email")).toEqual(output);
  });

  test('filters objects with unique "department" property', () => {
    const input = [
      { id: 1, department: "HR" },
      { id: 2, department: "IT" },
      { id: 3, department: "HR" },
      { id: 4, department: "Finance" },
      { id: 5, department: "Finance" },
      { id: 6, department: "Marketing" },
    ];
    const output = [
      { id: 2, department: "IT" },
      { id: 6, department: "Marketing" },
    ];
    expect(filterUniqueProperty(input, "department")).toEqual(output);
  });
});
