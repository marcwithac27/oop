const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const engineerHtml = require("./templates/engineer");
const mainHtml = require("./templates/main");
const internHtml = require("./templates/intern");
const managerHtml = require("./templates/manager");


console.log("Please answer the prompts to build your engineering team");

const init = async () => {
    const mgrInfo = await makeManager();
    if (mgrInfo.engineer == false && mgrInfo.interns == false){
        const makeCards = await cards(mgrInfo, "null", "null");
        const finalHtml = await createTeamHtml(makeCards);
        writeFiles(finalHtml);
    }
    else if(mgrInfo.engineer == true && mgrInfo.interns == true){
        const engInfo = await createEngTeam();
        const internInfo = await createInternHtml();
        const makeCards = await cards(mgrInfo, engInfo, internInfo);
        const finalHtml = await createTeamHtml(makeCards);
        writeFiles(finalHtml);
    }
    else if(mgrInfo.engineer == true && mgrInfo.interns == false){
        const engInfo = await createEngTeam();
        const makeCards = await cards(mgrInfo, engInfo, "null");
        const finalHtml = await createTeamHtml(makeCards);
        writeFiles(finalHtml);
    }
    else if(mgrInfo.engineer == false && mgrInfo.interns == true){
        const internInfo = await createInternHtml();
        const makeCards = await cards(mgrInfo, "null", internInfo);
        const finalHtml = await createTeamHtml(makeCards);
        writeFiles(finalHtml);
    }
  };

const makeManager = async () => {
    const prompts = [
        {
            type: "input",
            name: "name",
            message: "Managers's name?"
          },
          {
            type: "input",
            name: "id",
            message: "Employee ID?"
          },
          {
            type: "input",
            name: "email",
            message: "Email?"
          },
          {
            type: "input",
            name: "number",
            message: "Office number?"
          },
          {
            type: 'confirm',
            name: 'engineer',
            message: 'Any engineers on the team? ',
            default: true
          },
          {
            type: 'confirm',
            name: 'interns',
            message: 'Any interns on the team? ',
            default: true
          },
    ];
    const answers = await inquirer.prompt(prompts);
    return answers;
}

const createEngTeam = async (inputs = []) => {

    const prompts = [
        {
            type: "input",
            name: "name",
            message: "Engineer's team member's name?"
          },
          {
              type: "input",
              message: "Github?",
              name: "github",
          },
          {
            type: "input",
            name: "id",
            message: "Employee ID?"
          },
          {
            type: "input",
            name: "email",
            message: "What is their email?"
          },
          {
            type: 'confirm',
            name: 'again',
            message: 'Any more engineers? ',
            default: true
          }

    ];
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];

    return again ? createEngTeam(newInputs) : newInputs;
}

const createInternHtml = async (inputs = []) => {

    const prompts = [
        {
            type: "input",
            name: "name",
            message: "The intern team member's name?"
          },
          {
              type: "input",
              message: "School they went to?",
              name: "school",
          },
          {
            type: "input",
            name: "id",
            message: "Employee ID?"
          },
          {
            type: "input",
            name: "email",
            message: "Email?"
          },
          {
            type: 'confirm',
            name: 'again',
            message: 'Any more Interns? ',
            default: true
          }

    ];
    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];

    return again ? createInternHtml(newInputs) : newInputs;
}

init();

const cards = async (man, eng, int) => {
    let teamHtml = "";
    const manager = new Manager(man.name, man.id, man.email, man.number);
    const engineer = [];
    const intern = [];

    teamHtml += managerHtml.generateHTML(manager);
    if (eng != "null"){
        eng.forEach(eng => {
            engineer.push(new Engineer(eng.name, eng.id, eng.email, eng.github));
        });
        engineer.forEach(data => {
            teamHtml += engineerHtml.generateHTML(data);
        })
    }
    if (int != "null"){
        int.forEach(int => {
            intern.push(new Intern(int.name, int.id, int.email, int.school));
        });
        intern.forEach(data => {
            teamHtml += internHtml.generateHTML(data);
        })
    }

    return teamHtml;
} 


createTeamHtml = function(data){
    return mainHtml.generateHTML(data);    
}

const writeFiles = (data) => {
    fs.writeFile('./output/index.html', data, (err) => {
        if (err) throw err;
        console.log('Saved Yo!!!');
});
}