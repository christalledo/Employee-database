// will edit
const inquirer = require("inquirer");

function questions(condition) {
  switch (condition) {
    case "add a department":
      return [
        {
          // Description
          type: "input",
          message: "Please enter the name of the department",
          name: "department",
        },
      ];
    // Installation            ]

    case "add a role":
      return [
        {
          // Description
          type: "input",
          message: "Please enter the name of the role",
          name: "title",
        },
        {
          type: "input",
          message: "Please enter the salary for the role",
          name: "salary",
        },
        {
          // Table of Contents
          type: "input",
          message: "Please enter the department id",
          name: "department_id",
        },
      ];
    // Installation            ]

    case "add an employee":
      return [
        {
          // Description
          type: "input",
          message: "Please enter the first name of the employee",
          name: "firstName",
        },
        {
          // Description
          type: "input",
          message: "Please enter the last name of the employee",
          name: "lastName",
        },
        {
          // Description
          type: "input",
          message: "Please enter the role of the employee",
          name: "role",
        },
        {
          // Description
          type: "input",
          message: "Please enter the employee_id of the manager",
          name: "manager",
        },

      ];
    case "update an employee role":
      return [
        {
          // Description
          type: "input",
          message: "What is the employee_id that you want to update?",
          name: "employee_id ",
        },

        {
          // Description
          type: "input",
          message: "What is the role_id of the new role for this employee?",
          name: "role_id",
        },
      ];

    default:
      return [
        {
          // Description
          type: "list",
          message: "What do you wanna do?",
          choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
          name: "question",
        },
      ];
      break;
  }
}

module.exports = questions;
