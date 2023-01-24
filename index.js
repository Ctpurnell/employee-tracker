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
          "View All Roles",
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
      } else if (answers.menu === "View All Roles") {
        viewRole();
      }
    });
}
function viewDept() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    menuOptions();
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

//adds a dept into the database
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
