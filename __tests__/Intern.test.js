const { expect, beforeEach, test } = require("@jest/globals");
const Intern = require("../lib/Intern");
const mockData = {
  name: "Intern",
  id: "3",
  email: "intern@foo.bar",
  school: "Foo Bar Bootcamp",
};
let intern;

beforeEach(() => {
  intern = new Intern(
    mockData.name,
    mockData.id,
    mockData.email,
    mockData.school
  );
});

test("Intern", () => {
  expect(intern.name).toBe(mockData.name);
  expect(intern.id).toBe(mockData.id);
  expect(intern.email).toBe(mockData.email);
  expect(intern.school).toBe(mockData.school);
});

test("getName", () => {
  expect(intern.getName()).toBe(mockData.name);
});

test("getId", () => {
  expect(intern.getId()).toBe(mockData.id);
});

test("getEmail", () => {
  expect(intern.getEmail()).toBe(mockData.email);
});

test("getRole", () => {
  expect(intern.getRole()).toBe("Intern");
});

test("getSchool", () => {
  expect(intern.getSchool()).toBe(mockData.school);
});
