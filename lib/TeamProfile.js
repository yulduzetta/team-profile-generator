const open = require("open");
const generateHTML = require("../src/generate-html");

const { writeFile, copyFile } = require("../src/create-page");
const { collectTeamProfileInfo } = require("../src/prompt-user");

class TeamProfile {
  constructor() {}
  generateTeamProfilePage() {
    return collectTeamProfileInfo()
      .then((employees) => {
        return generateHTML(employees);
      })
      .then((pageHTML) => {
        return writeFile(pageHTML);
      })
      .then(() => {
        return copyFile();
      })
      .then(() => {
        open("./dist/index.html");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports =  TeamProfile;
