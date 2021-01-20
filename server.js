const mysql = require('mysql');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_DB'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Welcome to the employee management system.');
    mainMenu();

    function mainMenu() {
        inquirer.prompt({
                name: "choice",
                type: "list",
                message: "Please select an action from the list:"
                choices: ["Add department, role, or employee", "View department, role or employee", "Update employee role"]
            })

            .then(function(answer) {
                switch (answer.choice) {
                    case "Add department, role, or employee":
                        addChoice();
                        break;

                    case "View department, role or employee":
                        viewChoice();
                        break;

                    case "Update employee role":
                        updateChoice();
                        break;
                }
            });

    function addChoice() {
        inquirer.prompt({
            name: "addition",
            type: "list",
            message: "Please select an action from the list:"
            choices: ["Add department", "Add role", "Add employee"]
        })

        .then(function(answer) {
            switch (answer.addition) {
                case "Add department":
                //    addDept();
            }
        })
    }

    function viewChoice() {

    }

function returnMenu() {
    inquirer.prompt({
        name: "return-menu",
        type: "list",
        message: "Return to main menu?"
        choices: ["Yes", "No"]
    })

    .then(function(answer) {
        switch (answer['return-menu']) {
            case "Yes":
            mainMenu();
            break;

            case "No":
            console.log("Thank you for using the employee management system");
            connection.end();
        }
    }
};
