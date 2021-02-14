const inquirer = require("inquirer");

const generateHTML = require("../src/generate-html");
const { writeFile, copyFile } = require("../src/create-page");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class TeamProfile {
  constructor() {
    this.employees = [];
    this.employee = {};
  }

  sharedInfoPrompts(employeeRole) {
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
  }

  managerInfoPrompt() {
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
  }

  engineerInfoPrompt() {
    return inquirer.prompt({
      type: "input",
      name: "github",
      message: `Enter your Engineer's Github handle: `,
      validate: (githubUser) => {
        if (githubUser) {
          return true;
        } else {
          console.log(`Please enter your Engineer's Github handle`);
          return false;
        }
      },
    });
  }

  internInfoPrompt() {
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
  }

  collectTeamProfileInfo() {
    return inquirer
      .prompt({
        type: "list",
        name: "employeeRole",
        message: "Choose employee type",
        choices: ["Manager", "Engineer", "Intern"],
      })
      .then(({ employeeRole }) => {
        this.employee.role = employeeRole;
        return this.sharedInfoPrompts(employeeRole)
          .then(({ name, id, email }) => {
            switch (employeeRole) {
              case "Manager":
                return this.managerInfoPrompt().then(({ officeNumber }) => {
                  const manager = new Manager(name, id, email, officeNumber);
                  manager.role = employeeRole;
                  this.employees.push(manager);
                });

              case "Engineer":
                return this.engineerInfoPrompt().then(({ github }) => {
                  const engineer = new Engineer(name, id, email, github);
                  engineer.role = employeeRole;
                  this.employees.push(engineer);
                });

              case "Intern":
                return this.internInfoPrompt().then(({ school }) => {
                  const intern = new Intern(name, id, email, school);
                  intern.role = employeeRole;
                  this.employees.push(intern);
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
              return this.collectTeamProfileInfo();
            } else {
              return;
            }
          });
      });
  }

  generateTeamProfilePage() {
    this.collectTeamProfileInfo()
      .then(() => {
        return generateHTML(this.employees);
      })
      .then((pageHTML) => {
        return writeFile(pageHTML);
      })
      .then(() => {
        return copyFile();
      })
      .then((copyFileResponse) => {
        console.log(copyFileResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = TeamProfile;
