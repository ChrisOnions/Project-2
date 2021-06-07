# Project 2

![Licence](https://img.shields.io/badge/Licence-MIT-yellow)
![Grade](https://img.shields.io/badge/Grade-A%2B-blue)
![Build](https://img.shields.io/badge/Build-Pass-green)

### Table of contents

- [Install Instructions](#Install)
- [Links](##Links)
- [Aim](##Aim)
- [Prerequisites](##Prerequisites)
- [Collaborators](##collaborators)
- [Install Guide](##Install)
- [Pictures](##Pictures)
- [Future Dev](#Future-Dev-Plans)

## Links

- [GitHub Repository](https://github.com/ChrisOnions/E-Commerce-Backend)

- [Deployed on heroku](www.website.here)

## Aim

A database is essential to any application that collects data. Larger applications typically collect more data—making data management more complex. For example, we might have to compare data across databases, migrate an app's existing database, or even use various types of databases. Object-relational mapping (ORM) makes these tasks more manageable by helping us to interact with databases using JavaScript.

## Prerequisites

- Javascript
- React
- Express
- Node.js
- NPM
- MySql
- My Sql Workbench

## Collaborators

If you would like to colaborate on this project or would like to know more please see my contacts for information oh how to reach me.

## Install

<span style="color:green">Clone Repository</span> - (From github Repository)

<span style="color:green">NPM i</span> - (To install all required packages from package.json)

<span style="color:green">Create file .env </span> - (From github Repository)

## Env file Template

```.env
DB_NAME=food_waste_db
DB_PASSWORD= 'Password Goes HERE'
DB_USER= root
```

<span style="color:green">Create Db</span> - ( Sql database)

## SQL seed schema

```
DROP DATABASE IF EXISTS food_waste_db;
CREATE DATABASE food_waste_db;
```

<span style="color:green">npm run seed</span> - (Seed Sql database)

<span style="color:green">Node Server.js</span> - (Starts program)

<span style="color:green">Visist http://localhost:3001/</span> - (Or change PORT)

<span style="color:green">Use postman/insomnia to test routes</span> - (Useage)

---

## Pictures

![Homepage pic](./Assets/)
![Insert  text here](./Assets/)

# Future-Dev-Plans

<!--
Need NOW

// Add base range for foodCagegorys exp time (ie. 3 days, 2 months )
---
// Create Hooks on items that get the category exp time and starts a countdown on the items when added to DB

Ref : https://www.w3schools.com/howto/howto_js_countdown.asp
---


-->
