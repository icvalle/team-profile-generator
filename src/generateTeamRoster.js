function renderManager(manager) {
    return `<figure class="card">
    <div class="card-body">
        <h2>${manager.name}</h2>
        <h3><i class="fa fa-coffee"></i> ${manager.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
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
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">GitHub: ${engineer.github}</li>
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
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </figure>`;
}

function generateTeamRoster(teamMembers) { 
    teamMembers.filter((member) => {
        if (member.getRole() === "Engineer") {
            for (i = 0; i < member.length; i++) {
                renderEngineer(member);
            }
        } else if (member.getRole() === "Intern"){
            for (i = 0; i < member.length; i++) {
                renderIntern(member);
            }
        } else {
            return;
        }
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
            ${renderManager(teamMembers[0])}
            
            <figure class="card">
                <div class="card-body">
                    <h2>Jared</h2>
                    <h3><i class="fa fa-coffee"></i> Manager</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">Office Number:</li>
                </ul>
            </figure>
            
            <figure class="card">
                <div class="card-body">
                    <h2>Grace</h2>
                    <h3><i class="fa fa-cogs"></i> Engineer</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">GitHub:</li>
                </ul>
            </figure>
    
            <figure class="card">
                <div class="card-body">
                    <h2>John</h2>
                    <h3><i class="fa fa-graduation-cap"></i> Intern</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">School:</li>
                </ul>
            </figure>
        </main>
    
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="../index.js"></script>
    </body>
    </html>`;
}


module.exports = generateTeamRoster;