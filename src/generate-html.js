const fs = require("fs");

const handleManagers = (managers) => {
  return managers.map(({ name, id, email, officeNumber }) => {
    return `    
    <div class="col s4">
    <div class="card horizontal">
        <div class="card-stacked">
            <div class="card-content deep-purple lighten-2 center-align">
                <h5>${name}</h5>
                <h6>
                    <i class="tiny material-icons">free_breakfast</i>
                    Manager
                </h6>
            </div>
            <div class="card-action-wrapper">
                <div class="card-action">
                    <div><span>ID:</span> ${id}</div>
                    <div><span>Email:</span> <a href = "mailto:${email}">${email}</a></div>
                    <div><span>Office number:</span> ${officeNumber}</div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  });
};
const handleEngineers = (engineers) => {
  return engineers.map(({ name, id, email, github }) => {
    return `    
    <div class="col s4">
    <div class="card horizontal">
        <div class="card-stacked">
            <div class="card-content light-blue center-align">
                <h5>${name}</h5>
                <h6>
                    <i class="tiny material-icons">laptop_mac</i>
                    Engineer
                </h6>
            </div>
            <div class="card-action-wrapper">
                <div class="card-action">
                <div><span>ID:</span> ${id}</div>
                <div><span>Email:</span> <a href = "mailto:${email}">${email}</a></div>
                <div><span>Github:</span> <a href="https://github.com/${github}" target="_blank">${github}</a> </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  });
};

const handleInterns = (interns) => {
  return interns.map(({ name, id, email, school }) => {
    return `
    <div class="col s4">
    <div class="card horizontal">
        <div class="card-stacked">
            <div class="card-content green lighten-2 center-align">
                <h5>${name}</h5>
                <h6>
                    <i class="tiny material-icons">school</i>
                    Intern
                </h6>
            </div>
            <div class="card-action-wrapper">
                <div class="card-action">
                <div><span>ID:</span> ${id}</div>
                <div><span>Email:</span> <a href = "mailto:${email}">${email}</a></div>
                <div><span>School:</span> ${school}</div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
  });
};

module.exports = (data) => {
  const managers = data.filter((employee) => employee.role === "Manager");
  const engineers = data.filter((employee) => employee.role === "Engineer");
  const interns = data.filter((employee) => employee.role === "Intern");
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewdivort" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@300&display=swap" rel="stylesheet">    
      <link rel="stylesheet" href="style.css">
      </head>
  
  <body>
      <nav>
          <div class="nav-wrapper center-align">
              <a href="#" class="brand-logo">
                  <i class="tiny material-icons">people</i>
                  Team Profile</a>
          </div>
      </nav>
      <div class="container">
          <div class="wrapper-managers container">
              <div class="row">
                  ${handleManagers(managers).join("")}
              </div>
          </div>
  
          <div class="wrapper-engineers container">
              <div class="row">
                  ${handleEngineers(engineers).join("")}
              </div>
          </div>
  
          <div class="wrapper-interns container">
              <div class="row">
                  ${handleInterns(interns).join("")}
              </div>
          </div>
      </div>
      </div>
      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
  
  </html>
    `;
};
