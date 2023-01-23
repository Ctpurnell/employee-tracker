const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ogctp0906@",
  database: "employees_db",
});

inquirer.prompt([
  {
    type: "input",
    name: "Departments",
    message: "View All Departments",
  },
  {
    type: "input",
    name: "newDepartments",
    message: "Add Department",
  },
  {
    type: "input",
    name: "Roles",
    message: "View All Roles",
  },
  {
    type: "input",
    name: "newRoles",
    message: "Add Role",
  },
  {
    type: "input",
    name: "Employees",
    message: "View all Employees",
  },
]);
