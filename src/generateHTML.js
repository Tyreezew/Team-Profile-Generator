const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


function generateCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
        const teamArray = team[i];
        switch(teamArray.getRole()) {
            case 'Manager':
                const manager = new Manager(teamArray.name, teamArray.id, teamArray.email, teamArray.officeNumber);
                cards.push(generateManagerCard(manager));
                break;
             case 'Engineer':
                const engineer = new Engineer (teamArray.name, teamArray.id, teamArray.email, teamArray.github);
                cards.push(generateEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(teamArray.name, teamArray.id, teamArray.email, teamArray.school);
                cards.push(generateInternCard(intern));
                break;

        }
    } return cards.join('')
}

const generateManagerCard = function (Manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card" style="width: 18rem">
            <div class="card-header bg-primary text-white">
                 <h3>${Manager.getName()}</h3>
                 <h4>${Manager.getRole()}<span class="material-icons">person_outline</span></h4>
             </div>

    <div class="card-body">
        <p class="id">ID: ${Manager.getId()} </p>
        <p class="email">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></p>
         <p class="office">Office Number: ${Manager.getOfficeNumber()}</p>

        </div>
    </div>
</div>`
}

const generateEngineerCard = function (Engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card" style="width: 18rem">
            <div class="card-header bg-primary text-white">
                 <h3>${Engineer.getName()}</h3>
                 <h4>${Engineer.getRole()}<span class="material-icons">engineering</span></h4>
             </div>

    <div class="card-body">
        <p class="id">ID: ${Engineer.getId()} </p>
        <p class="email">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
        <p class="github">Github: <a href="https://github/${Engineer.getGithub()}">${Engineer.getGithub()}</a></p>

        </div>
    </div>
</div>`
};

const generateInternCard = function (Intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card" style="width: 18rem">
            <div class="card-header bg-primary text-white">
                 <h3>${Intern.getName()}</h3>
                 <h4>${Intern.getRole()}<span class="material-icons">school</span></h4>
             </div>

    <div class="card-body">
        <p class="id">ID: ${Intern.getId()} </p>
        <p class="email">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></p>
        <p class="school">School: ${Intern.getSchool()}</p>

        </div>
    </div>
</div>`
};

function generateHTML(team) {
    console.log(team)

    return `
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<title> Team Profile </title>
</head>


<body>
<header class="bg-danger text-center">
<h1 class="text-white p-4">My Team</h1>
</header>
<div class="container">
<div class="justify-content-center row d-flex align-items-center" id="team-cards">
    <!--Team Cards -->
    ${generateCards(team)}

        </div>
    </div>
</body>
</html>
    `
}

module.exports = generateHTML;