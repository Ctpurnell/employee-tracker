const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PW,
  database: "employees_db",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("=================================================");
  console.log("");
  console.log("               EMPLOYEE TRACKER                  ");
  console.log("");
  console.log("=================================================");
  menuOptions();
});
function menuOptions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "Add Department",
          "View all Roles",
          "Add Role",
          "View all Employees",
          "Add an Employee",
          "Update an Employee Role",
        ],
      },
    ])
    .then((answers) => {
      // console.log(answers);
      if (answers.menu === "View All Departments") {
        viewDept();
      } else if (answers.menu === "Add Department") {
        addDept();
      } else if (answers.menu === "View all Employees") {
        viewEmp();
      } else if (answers.menu === "Add an Employee") {
        addEmp();
      } else if (answers.menu === "View all Roles") {
        viewRole();
      } else if (answers.menu === "Add Role") {
        addRole();
      }
    });
}

//shows department table
function viewDept() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    menuOptions();
  });
}
//function to add department
function addDept() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "What is the id for your department?",
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your department?",
      },
    ])
    .then((answers) => {
      connection.query("INSERT INTO department SET ?", answers, (err, res) => {
        if (err) {
          console.log(err);
        }
        console.table(res);
        menuOptions();
      });
    });
}
//handles the view employee
function viewEmp() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    menuOptions();
  });
}
//questions for user
function addEmp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the first name of the Employee?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the last name of the Employee?",
      },
      {
        type: "list",
        name: "roleId",
        message: "What is the employees role?",
        choices: [
          { name: "Salesperson", value: 2 },
          { name: "Lead Engineer", value: 3 },
          { name: "Software Engineer", value: 4 },
          { name: "Accountant", value: 6 },
          { name: "Legal Team Lead", value: 7 },
        ],
      },
    ])
    // handles information into employee set
    .then((answers) => {
      const { firstName, lastName, roleId } = answers;
      connection.query(
        "INSERT INTO employee SET first_name = ?, last_name = ?, role_id = ?",
        [firstName, lastName, roleId],
        (err, res) => {
          if (err) {
            console.log(err);
          }
          console.table(res);
          menuOptions();
        }
      );
    });
}

function viewRole() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    menuOptions();
  });
}

//add role to the database
function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of the role?",
    },
    {
      type: "number",
      name: "salary",
      message: "What is the salary of the role?",
    },
  ]);
}
