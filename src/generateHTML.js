
function generateCards(employees) {
    // variable to hold all of the html for the profile cards
    let html = ''
    employees.forEach(element => {
        // change key and value data depending on employee title/role
        let specialText = ''
        switch (element.getRole()) {
            case 'Manager':
                specialText = `Office Number: ${element.getOfficeNumber()}`
                break;
            case 'Engineer':
                specialText = `GitHub: <a href='https://github.com/${element.getGithub()}'>${element.getGithub()}</a>`
                break;
            case 'Intern':
                specialText = `School: ${element.getSchool()}`
                break;
            default:
                break;
        }

        // create card for the employee
        const card = `
        <div class="col-sm-4 col-md-3 mx-auto">
        <div class="card p-2">

        <div class="card-body text-white bg-primary mb-3">
            <h5 class="card-title">${element.getName()}</h5>
            <p class="card-text">${element.getRole()}</p>
        </div>
        <div>
            <ul class="list-group list-group-flush m-1">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">Email: <a href='mailto:${element.getEmail()}'>${element.getEmail()}</a></li>
                <li class="list-group-item">${specialText}</li>
            </ul>
        </div>
    </div>
    </div>
        `
        // add the completed card into a string of html
        html += card;
    });
    return html;
}

function generateHTML(team) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header class="jumbotron jumbotron-fluid bg-success">
        <div class="container">
            <h1 class="display-4 text-center text-white font-weight-bold">My Team</h1>
        </div>
    </header>
        <div class='row'>
        ${generateCards(team)}
        </div>

    </body>
    </html>`
}

module.exports = generateHTML;