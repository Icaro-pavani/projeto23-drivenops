# <p align = "center"> Project 23 - DrivenOps </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Icaro Pavani-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/Icaro-pavani/projeto23-drivenops?color=4dae71&style=flat-square" />
</p>

## :clipboard: Description

DrivenOps is an applications to implement a DevOps routine, where it pull request created will be testes before be possible to merge it. And each time a new push are made in the main branch de application will be automatically deployed at an online machine at AWS. This application are a random selector for a class, where each time you reach the main page or reload it, a random name of a student in the database wiil be chosen.

---

## :computer: Technologies and concepts

- REST APIs
- Node.js
- TypeScript
- PostgreSQL
- Prisma
- React
- Github Actions

---

## :rocket: Routes

```yml
GET /api/students
    - Route to list all students registered at the database
    - headers: {}
    - body: {}
```

```yml
GET /api/students/random
    - Route to get one random student at the students database
    - headers: {}
    - body: {}
```

---

## 🏁 Front-end Routes

Below are the routes to access the two pages of the application:

```yml
route: /
  - Root of the application where will show the name of a random student
```

```yml
route: /all
  - Root of the application where will show the list of all students in the database
```

---

## 🏁 Running the application

This project was created using TypeScript, [Node.js](https://nodejs.org/en/download/) and [PostgresSQL](https://www.postgresql.org/) as database. So, make sure do you have the last version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running localy. The front-end was created using [Create React App](https://github.com/facebook/create-react-app). And the application was build to run in [Docker](https://docs.docker.com/get-docker/) containers.

Start cloning this repository in you local machine:

```
git clone https://github.com/Icaro-pavani/projeto23-drivenops
```

After that, inside the cloned folder, just need to run the command below to build the Docker images and containers.

```
docker-compose up
```

At last, the application will be running in your local machine and the front-end could be accessed by `http:localhost:80`, and the back-end through `http::localhost:5000` .

## Deploy

The link of the deployed application is [http://ipt-drivenops.tk](http://ipt-drivenops.tk)
