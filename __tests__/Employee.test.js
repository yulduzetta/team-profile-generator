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

test("Employee", () => {
  expect(employee.name).toBe(mockData.name);
  expect(employee.id).toBe(mockData.id);
  expect(employee.email).toBe(mockData.email);
});

test("getName", () => {
  expect(employee.getName()).toBe(mockData.name);
});

test("getId", () => {
  expect(employee.getId()).toBe(mockData.id);
});

test("getEmail", () => {
  expect(employee.getEmail()).toBe(mockData.email);
});

test('getRole', ()=>{
    expect(employee.getRole()).toBe('Employee');
})
