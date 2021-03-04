function generateCards(employees) {
    // get objects seperated out and create new card for each
    let html = ''
    employees.forEach(element => {
        const card = `
        <div class="card" style="width: 18rem;">

        <div class="card-body text-white bg-primary mb-3">
            <h5 class="card-title">${element.getName()}</h5>
            <p class="card-text">${element.getRole()}</p>
        </div>
        <div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${element.getId()}</li>
                <li class="list-group-item">Email: ${element.getEmail()}</li>
                <li class="list-group-item">${element.getSpecial()}</li>
            </ul>
        </div>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
        `
        html += card;
    });
    return html;

    // populate each card with import profile info
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
        ${generateCards(team)}
        <script src="../src/generateHTML.js"></script>
    </body>
    </html>`
}

module.exports = generateHTML;
// module.exports = generateCards;