const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  //   port: 3306,   IS this right?...........................................
  user: "root",
  password: "Ogctp0906@",
  database: "employees_db",
});
