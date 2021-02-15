const { expect, beforeEach, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");
const mockData = {
  name: "Engineer",
  id: "1",
  email: "engineer@foo.bar",
  github: "git-hacker",
};
let engineer;

beforeEach(() => {
  engineer = new Engineer(
    mockData.name,
    mockData.id,
    mockData.email,
    mockData.github
  );
});

test("creates Engineer object", () => {
  expect(engineer.name).toBe(mockData.name);
  expect(engineer.id).toBe(mockData.id);
  expect(engineer.email).toBe(mockData.email);
  expect(engineer.github).toBe(mockData.github);
});

test("returns the expected  name", () => {
  expect(engineer.getName()).toBe(mockData.name);
});

test("returns the expected id", () => {
  expect(engineer.getId()).toBe(mockData.id);
});

test("returns the expected email", () => {
  expect(engineer.getEmail()).toBe(mockData.email);
});

test("returns the expected role", () => {
  expect(engineer.getRole()).toBe("Engineer");
});

test("returns the expected github user", () => {
  expect(engineer.getGithub()).toBe(mockData.github);
});
