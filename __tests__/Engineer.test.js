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

test("Engineer", () => {
  expect(engineer.name).toBe(mockData.name);
  expect(engineer.id).toBe(mockData.id);
  expect(engineer.email).toBe(mockData.email);
  expect(engineer.github).toBe(mockData.github);
});

test("getName", () => {
  expect(engineer.getName()).toBe(mockData.name);
});

test("getId", () => {
  expect(engineer.getId()).toBe(mockData.id);
});

test("getEmail", () => {
  expect(engineer.getEmail()).toBe(mockData.email);
});

test("getRole", () => {
  expect(engineer.getRole()).toBe("Engineer");
});

test("getGithub", () => {
  expect(engineer.getGithub()).toBe(mockData.github);
});
