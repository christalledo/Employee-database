const inquirer = require("inquirer")
const mysql = require("mysql2")
const userInterface = require("./user-interface");
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'password1234',
        database: 'employee_db'
    },
    console.log(`Connected to the movies_db database.`)
);
const baseQuestion = userInterface();

async function init() {
    const baseQuestion = userInterface();
    const answer = await inquirer.prompt(baseQuestion)
    switch (answer.question) {
        case "view all departments":
            viewAllDepartments();
            break;

        case "view all roles":
            viewAllRoles();
            break;

        case "view all employees":
            viewAllEmployees();
            break;

        case "add a department":
            addDepartment();
            break;

        case "add a role":
            addRole();
            break;

        case "add an employee":
            addEmployee();
            break;

        case "update an employee role":
            updateEmployee();
            break;
    }
}

function viewAllDepartments() {
    db.query("SELECT * FROM department", (err, result) => {
        console.table(result)
        init();
    })
}
function viewAllRoles() {
    db.query("SELECT * FROM role", (err, result) => {
        console.table(result)
        init();
    })
}

function viewAllEmployees() {
    db.query("SELECT * FROM employee", (err, result) => {
        console.table(result)
        init();
    })
}
function addDepartment() {
    const questions = userInterface("add a department")
    inquirer.prompt(questions)
        .then(answers => {
            db.query("INSERT INTO department (department_name) values (?)", [answers.department], (err, result) => {
                console.table(result)
                init();
            })
        })
}

function addRole() {
    const questions = userInterface("add a role")
    inquirer.prompt(questions)
        .then(answers => {
            db.query("INSERT INTO role (role_title, salary, department_id) values (?,?,?)", [answers.title, answers.salary, answers.department_id], (err, result) => {
                console.table(result)
                init();
            })
        })
}

function addEmployee() {
    const questions = userInterface("add an employee")
    inquirer.prompt(questions)
        .then(answers => {
            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)", [answers.firstName, answers.lastName, answers.role, answers.manager], (err, result) => {
                console.log(err)
                console.table(result)
                init();
            })
        })
}


function updateEmployee() {
    const questions = userInterface("update an employee role")
    inquirer.prompt(questions)
        .then(answers => {
            db.query(`UPDATE employee set role_id = ? where id = ?`, [answers.role_id, answers.employee_id], (err, result) => {
                console.log(err)
                console.table(result)
                init();
            })
        })
}


init();

