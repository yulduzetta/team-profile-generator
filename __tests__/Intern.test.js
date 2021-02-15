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

test("creates Intern object", () => {
  expect(intern.name).toBe(mockData.name);
  expect(intern.id).toBe(mockData.id);
  expect(intern.email).toBe(mockData.email);
  expect(intern.school).toBe(mockData.school);
});

test("returns the expecteed name", () => {
  expect(intern.getName()).toBe(mockData.name);
});

test("returns the expected id", () => {
  expect(intern.getId()).toBe(mockData.id);
});

test("returns the expected email", () => {
  expect(intern.getEmail()).toBe(mockData.email);
});

test("returns the expected role", () => {
  expect(intern.getRole()).toBe("Intern");
});

test("returns the expected school", () => {
  expect(intern.getSchool()).toBe(mockData.school);
});
