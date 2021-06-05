function renderManager(manager) {
    return `<figure class="card">
    <div class="card-body">
        <h2>${manager.name}</h2>
        <h3><i class="fa fa-coffee"></i> ${manager.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</figure>`;
}


function renderEngineer(engineer) {
    return `<figure class="card">
        <div class="card-body">
            <h2>${engineer.name}</h2>
            <h3><i class="fa fa-cogs"></i> ${engineer.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
        </figure>`;
    }


function renderIntern(intern) {
    return `<figure class="card">
        <div class="card-body">
            <h2>${intern.name}</h2>
            <h3><i class="fa fa-graduation-cap"></i> ${intern.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </figure>`;
}

function generateTeamRoster(teamMembers) { 
    const employeeArray = [];

    const managerArray = teamMembers.filter((member) => {
        return member.getRole() === "Manager"
    });

    const engineerArray = teamMembers.filter((member) => {
        return member.getRole() === "Engineer"
    });

    const internArray = teamMembers.filter((member) => {
        return member.getRole() === "Intern"
    });

    managerArray.forEach(manager => {
        const renderedManager = renderManager(manager);
        employeeArray.push(renderedManager);
    });

    engineerArray.forEach(engineer => {
        const renderedEngineer = renderEngineer(engineer);
        employeeArray.push(renderedEngineer);
    });

    internArray.forEach(intern => {
        const renderedIntern = renderIntern(intern);
        employeeArray.push(renderedIntern);
    });
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="styles.css">
        <title>Team Roster</title>
    </head>
    <body>
    
        <header class="jumbotron">
            <h1>My Team</h1>
        </header>
        <main>
            ${employeeArray.join("")}
        </main>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="../index.js"></script>
    </body>
    </html>`;
}


module.exports = generateTeamRoster;