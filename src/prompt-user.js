const inquirer = require("inquirer");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

let employees = [];

const sharedInfoPrompts = (employeeRole) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `Enter your ${employeeRole}'s name: `,
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log(`Please enter your ${employeeRole}'s name`);
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: `Enter your ${employeeRole}'s id: `,
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log(`Please enter your ${employeeRole}'s id`);
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: `Enter your ${employeeRole}'s email: `,
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log(`Please enter your ${employeeRole}'s email`);
          return false;
        }
      },
    },
  ]);
};

const managerInfoPrompt = () => {
  return inquirer.prompt({
    type: "input",
    name: "officeNumber",
    message: `Enter your Manager's office number: `,
    validate: (officeNumber) => {
      if (officeNumber) {
        return true;
      } else {
        console.log(`Please enter your Manager's office number`);
        return false;
      }
    },
  });
};

const engineerInfoPrompt = () => {
  return inquirer.prompt({
    type: "input",
    name: "github",
    message: `Enter your Engineer's Github username: `,
    validate: (githubUser) => {
      if (githubUser) {
        return true;
      } else {
        console.log(`Please enter your Engineer's Github handle`);
        return false;
      }
    },
  });
};

const internInfoPrompt = () => {
  return inquirer.prompt({
    type: "input",
    name: "school",
    message: `Enter your Intern's school: `,
    validate: (school) => {
      if (school) {
        return true;
      } else {
        console.log(`Please enter your Intern's school`);
        return false;
      }
    },
  });
};

const collectTeamProfileInfo = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "employeeRole",
      message: "Choose employee type",
      choices: ["Manager", "Engineer", "Intern"],
    })
    .then(({ employeeRole }) => {
      return sharedInfoPrompts(employeeRole)
        .then(({ name, id, email }) => {
          switch (employeeRole) {
            case "Manager":
              return managerInfoPrompt().then(({ officeNumber }) => {
                const manager = new Manager(name, id, email, officeNumber);
                manager.role = employeeRole;
                employees.push(manager);
              });

            case "Engineer":
              return engineerInfoPrompt().then(({ github }) => {
                const engineer = new Engineer(name, id, email, github);
                engineer.role = employeeRole;
                employees.push(engineer);
              });

            case "Intern":
              return internInfoPrompt().then(({ school }) => {
                const intern = new Intern(name, id, email, school);
                intern.role = employeeRole;
                employees.push(intern);
              });
          }
        })
        .then(() => {
          return inquirer.prompt({
            type: "confirm",
            name: "confirmContinue",
            message: "Would you like to enter more employees?",
            default: true,
          });
        })
        .then(({ confirmContinue }) => {
          if (confirmContinue) {
            return collectTeamProfileInfo();
          } else {
            return;
          }
        })
        .then(() => {
          return employees;
        });
    });
};

module.exports = { collectTeamProfileInfo };
