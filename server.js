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
                message: "Please select an action from the list:",
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
            message: "Please select an action from the list:",
            choices: ["Add department", "Add role", "Add employee"]
        })

        .then(function(answer) {
            switch (answer.addition) {
                case "Add department":
                    addDept();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Add employee":
                    addEmployee();
                    break;
            }
        });

        function addDept() {
            inquirer.prompt({
                name: "add-dept",
                type: "input",
                message: "Please enter a department name:"
            })

            .then(function(answer) {
                answer['add-dept'].toString();
            });
        }

        function addRole() {
            inquirer.prompt({
                name: "add-role",
                type: "input",
                message: "Please enter the employee\'s role:"
            })

            .then(function(answer) {
                answer['add-role'].toString();
            });
        }

        function addEmployee() {
            inquirer.prompt({
                name: "add-employee",
                type: "input",
                message: "Please enter the employee\'s name:"
            })

            .then(function(answer) {
                answer['add-employee'].toString();
            });
        }
    }

    function viewChoice() {
        inquirer.prompt({
            name: "view",
            type: "list",
            message: "Please select an action from the list:",
            choices: ["View department", "View role", "View employee"]
        })

        then(function(answer) {
            switch (answer.view) {
                case "View department":
                    viewDept();
                    break;

                case "View role":
                    viewRole();
                    break;

                case "View employee":
                    viewEmployee();
                    break;
            }
        });
    }

    function updateChoice() {
        inquirer.prompt({
            name: "update",
            type: "list",
            message: "Please select an action from the list:",
            choices: ["Update department", "Update role", "Update employee"]
        })

        .then(function(answer) {
            switch (answer.update) {
                case "Update department":
                    updateDept();
                    break;

                case "Update role":
                    updateRole();
                    break;

                case "Update employee":
                    updateEmployee();
                    break;
            }
        });

        function updateDept() {
            inquirer.prompt({
                name: "update-dept",
                type: "input",
                message: "Please update the department name:"
            })

            .then(function(answer) {
                answer['update-dept'].toString();
            });
        }

        function updateRole() {
            inquirer.prompt({
                name: "update-role",
                type: "input",
                message: "Please update the employee\'s role:"
            })

            .then(function(answer) {
                answer['update-role'].toString();
            });
        }

        function updateEmployee() {
            inquirer.prompt({
                name: "update-employee",
                type: "input",
                message: "Please update the employee\'s name:"
            })

            .then(function(answer) {
                answer['update-employee'].toString();
            });
        }
    }
    }

function returnMenu() {
    inquirer.prompt({
        name: "return-menu",
        type: "list",
        message: "Return to main menu?",
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
