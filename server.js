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

connection.connect(function (err) {
  if (err) throw err;
  listPrompts();
});

function listPrompts() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to  do?",
      name: "name",
    },
  ]);
}
