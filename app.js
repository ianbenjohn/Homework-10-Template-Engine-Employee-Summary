const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​const team = [];
const questionStart = [{
    type: "list",
    name: "jobTitle",
    massage: "What is the title of the employee you are adding?",
    choices: ["Engineer", "Manager", "Intern", "Employee", "Finished"]
}];

//Engineer Question
const engiQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is this lunatic's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is this lunatic's ID",
    },
    {
        type: "input",
        name: "email",
        message: "What is this lunatic's email?" 
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is this lunatic's gitHub Account?"
    }
];

//Manager Questions
const manaQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is this so-called Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is this crazy person's ID",
    },
    {
        type: "input",
        name: "email",
        message: "What is this lunatic's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Where is this maniacss office?"
    }
];

//Intern Question
const internQuestions =[
    {
        type: "input",
        name: "name",
        message: "What is this intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is this suspect's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is this poor soul's email?",
    },
    {
        type: "input",
        name: "school",
        message: "What school is allowing this idiot to call it home?",
    }
];

//Employee Question
const empQuestions =[
    {
        type: "input",
        name: "name",
        message: "What is this intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is this suspect's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is this poor soul's email?",
    },
];


function add() {
    inquirer.prompt(questionStart).then(answers => {
        if(answers.jobTitle === "Engineer"){
            inquirer.prompt(engiQuestions).then(answer => {
                team.push(new Manager(answer.name, answer.id, asnwer.email, answer.officeNumber));
                add();
            });
        } else if(answers.jobTitle === "Manager"){
            inquirer.prompt(manaQuestions).then(answer => {
                team.push(new Engineer(answer.name, answer.id, answer.email, answer.gitHub));
                add();
            });
        } else if(answers.jobTitle === "Intern"){
            inquirer.prompt(internQuestions).then(answer => {
                team.push(new Intern(answer.name, answer.id, answer.email, answer.school));
                add();
            });
        } else if(answers.jobTitle === "Employee"){
            inquirer.prompt(empQuestions).then(answer => {
                team.push(new Employee(answer.name, answer.id, answer.email));
                add();
            });
        }else{
            const html = render(team);
            fs.writeFileSync(outputPath, html, err => {
                if(err){
                    throw err;
                }
            })
        };
    });
};

add();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
