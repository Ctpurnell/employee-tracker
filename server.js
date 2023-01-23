const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ogctp0906@",
  database: "employees_db",
});
