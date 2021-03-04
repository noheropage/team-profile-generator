function generateCard(employee) {
// get objects seperated out and create new card for each
// console.log(employee[0].name);
    employee.forEach(element => {
        console.log(element.getName())
        console.log(element.getRole())
        console.log(element.getId())
        console.log(element.getEmail())
        console.log(element.getSpecial())
        
        return `
        ${element.getName()}
        ${element.getRole()}
        ${element.getId()}
        ${element.getEmail()}
        ${element.getSpecial()}
        `
    });    
// return `
//     ${employee.Manager.name}`
    // ${employee.getRole()}
    // ${employee.getId()}
    // ${employee.getEmail()}
    // ${employee.getOfficeNumber()}
    
        
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
    
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        ${generateCard(team)}
        <script src="../src/generateHTML.js"></script>
    </body>
    </html>`
}

module.exports = generateHTML;
module.exports = generateCard;