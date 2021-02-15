const fs = require("fs");

const handleManagers = (managers) => {
  return managers.map(({ name, id, email, officeNumber }) => {
    return `    
    <div class="col-sm-4">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item card-header">
                    <h4 class="card-title">${name}</h4>
                    <h5 class="card-text"><i class="fas fa-mug-hot"></i> Manager</h5>
                </li>
                <div class="card-body-wrapper">
                    <li class="list-group-item"><span>ID:</span> ${id}</li>
                    <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                    <li class="list-group-item"><span>Office number:</span> ${officeNumber}</li>
                </div>
            </ul>
        </div>
    </div>
</div>
`;
  });
};
const handleEngineers = (engineers) => {
  return engineers.map(({ name, id, email, github }) => {
    return `
    <div class="col-sm-4">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item card-header">
                    <h4 class="card-title">${name}</h4>
                    <h5 class="card-text"><i class="fas fa-glasses"></i>
                        Engineer</h5>
                </li>
                <div class="card-body-wrapper">
                    <li class="list-group-item"><span>ID:</span> ${id}</li>
                    <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                    <li class="list-group-item"><span>Github:</span> <a href="https://github.com/${github}" target=“_blank”>${github}</a></li>
                </div>
            </ul>
        </div>
    </div>
</div>`;
  });
};

const handleInterns = (interns) => {
  return interns.map(({ name, id, email, school }) => {
    return `
    <div class="col-sm-4">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item card-header">
                    <h4 class="card-title">${name}</h4>
                    <h5 class="card-text"><i class="fas fa-user-graduate"></i>
                        Intern</h5>
                </li>
                <div class="card-body-wrapper">
                    <li class="list-group-item"><span>ID:</span> ${id}</li>
                    <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                    <li class="list-group-item"><span>School:</span> ${school}</li>
                </div>
            </ul>
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Newsreader&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous" />
      <link rel="stylesheet" href="../dist/style.css">
      <title>Document</title>
  
  </head>
  
  <body>
      <div class="nav-wrapper">
          <nav class="navbar">
              <h1 class="navbar-brand" href="#">
                  NEXT GENERATION SOLUTIONS TEAM PROFILE
              </h1>
          </nav>
      </div>
      <div>
      <div class="container" id="managers-container">
      <div class="row">
                  ${handleManagers(managers).join("")}
            </div>
        </div>
  
        <div class="container" id="engineers-container">
            <div class="row">
                  ${handleEngineers(engineers).join("")}
              </div>
          </div>
  
          <div class="container" id="interns-container">
          <div class="row">
                  ${handleInterns(interns).join("")}
              </div>
          </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
      crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
      crossorigin="anonymous"></script>
</body>
    `;
};
