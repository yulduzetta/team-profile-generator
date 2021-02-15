const { expect, beforeEach, test } = require("@jest/globals");
const Manager = require("../lib/Manager");
const mockData = {
  name: "Manager",
  id: "1",
  email: "manager@foo.bar",
  officeNumber: "1234567890",
};
let manager;

beforeEach(() => {
  manager = new Manager(
    mockData.name,
    mockData.id,
    mockData.email,
    mockData.officeNumber
  );
});

test("creates Manager object", () => {
  expect(manager.name).toBe(mockData.name);
  expect(manager.id).toBe(mockData.id);
  expect(manager.email).toBe(mockData.email);
  expect(manager.officeNumber).toBe(mockData.officeNumber);
});

test("returns the expected name", () => {
  expect(manager.getName()).toBe(mockData.name);
});

test("returns the expected id", () => {
  expect(manager.getId()).toBe(mockData.id);
});

test("returns the expected email", () => {
  expect(manager.getEmail()).toBe(mockData.email);
});

test("returns the expected role", () => {
  expect(manager.getRole()).toBe("Manager");
});

test("returns the expected office number", () => {
  expect(manager.getOfficeNumber()).toBe(mockData.officeNumber);
});
