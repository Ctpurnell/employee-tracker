# 12 SQL: Employee Tracker

## Task

For this assignment we were tasked with creating an employee tracker that is used in the command line. In this CLI application we needed to be able to access a database to show tables for 

## Mock-Up
The following video shows an example of the application being used from the command line:
To view, click on the link below:

https://drive.google.com/file/d/1vEMx5-pIum63nscTSPrR0kDuhbjMuNPK/view

## Installation
To start using this application, first ensure you have Node.js, npm, and mySQL installed, along with the ability to connect to a database. Then follow these steps:

Fork this repository
Run npm init
Run npm install
Run node . to start the application.





You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the following three tables:

- `department`

  - `id`: `INT PRIMARY KEY`

  - `name`: `VARCHAR(30)` to hold department name

- `role`

  - `id`: `INT PRIMARY KEY`

  - `title`: `VARCHAR(30)` to hold role title

  - `salary`: `DECIMAL` to hold role salary

  - `department_id`: `INT` to hold reference to department role belongs to

- `employee`

  - `id`: `INT PRIMARY KEY`

  - `first_name`: `VARCHAR(30)` to hold employee first name

  - `last_name`: `VARCHAR(30)` to hold employee last name

  - `role_id`: `INT` to hold reference to employee role

  - `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

- Update employee managers.

- View employees by manager.

- View employees by department.

- Delete departments, roles, and employees.

- View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> - A repository that has no code
>
> - A repository that includes a unique name but nothing else
>
> - A repository that includes only a README file but nothing else
>
> - A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 10%

- Your GitHub repository containing your application code.

### Walkthrough Video: 27%

- A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.

- The walkthrough video must show all of the technical acceptance criteria being met.

- The walkthrough video must demonstrate how a user would invoke the application from the command line.

- The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

### Technical Acceptance Criteria: 40%

- Satisfies all of the preceding acceptance criteria plus the following:

  - Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

  - Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

  - Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

- Follows the table schema outlined in the Challenge instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains a high-quality README with description and a link to a walkthrough video.

### Application Quality 10%

- The application user experience is intuitive and easy to navigate.

### Bonus

Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

- Application allows users to update employee managers (2 points).

- Application allows users to view employees by manager (2 points).

- Application allows users to view employees by department (2 points).

- Application allows users to delete departments, roles, and employees (2 points for each).

- Application allows users to view the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department (8 points).

## Review

You are required to submit BOTH of the following for review:

- A walkthrough video demonstrating the functionality of the application.

- The URL of the GitHub repository, with a unique name and a README describing the project.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
