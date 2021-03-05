# Team Profile Generator
Command line application that takes in info about employees and generates an HTML webpage that displays summaries for each team member

## Description
This app asks a manager a series of questions about their team and populates an HTML with a quick profile about each member. Depending on the employee's title/role in the team the card generated will display slightly different things. The profile of a manager will display their office number while engineer's have a link to their GitHub. Each profile has a link to the employee's email that will launch the user's default mail program. 

App also uses jest to run a series of tests on each of the classes.

## Installation
    npm install 

## Usage
    node index
After the prompts are answered it will create/override the file dist/index.html

    npm test





#### YouTube Video Link: 
[Running the team profile generator & tests in the command line on VS Code](https://youtu.be/jECxFLQRUYM "Team Profile Generator")