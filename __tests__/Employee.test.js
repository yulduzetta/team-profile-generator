const { expect, beforeEach, test } = require("@jest/globals");
const Employee = require("../lib/Employee");
const mockData = {
  name: "Employee",
  id: "0",
  email: "employeee@foo.bar",
};
let employee;

beforeEach(() => {
  employee = new Employee(
    mockData.name,
    mockData.id,
    mockData.email
  );
});

test("creates Employee object and gets access to its properties", () => {
  expect(employee.name).toBe(mockData.name);
  expect(employee.id).toBe(mockData.id);
  expect(employee.email).toBe(mockData.email);
});

test("returns the expected name", () => {
  expect(employee.getName()).toBe(mockData.name);
});

test("returns the exptected id", () => {
  expect(employee.getId()).toBe(mockData.id);
});

test("returns the expected email", () => {
  expect(employee.getEmail()).toBe(mockData.email);
});

test('retuns the expected role', ()=>{
    expect(employee.getRole()).toBe('Employee');
})
