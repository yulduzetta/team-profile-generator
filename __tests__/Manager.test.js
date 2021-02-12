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

test("Manager", () => {
  expect(manager.name).toBe(mockData.name);
  expect(manager.id).toBe(mockData.id);
  expect(manager.email).toBe(mockData.email);
  expect(manager.officeNumber).toBe(mockData.officeNumber);
});

test("getName", () => {
  expect(manager.getName()).toBe(mockData.name);
});

test("getId", () => {
  expect(manager.getId()).toBe(mockData.id);
});

test("getEmail", () => {
  expect(manager.getEmail()).toBe(mockData.email);
});

test("getRole", () => {
  expect(manager.getRole()).toBe("Manager");
});

test("getOfficeNumber", () => {
  expect(manager.getOfficeNumber()).toBe(mockData.officeNumber);
});
