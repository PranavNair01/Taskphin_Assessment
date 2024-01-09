# Taskphin Backend Assessment Task

The repository contains the entire code required to successfully run the backend software solution developed for the assessment.

## Steps to run locally:

1. Ensure you have `NodeJS`, `NPM`, and `PostgreSQL` installed in your local system.

2. After cloning the repository, create a `.env` file in the project root directory (i.e. the directory where `app.js` resides).

3. The `.env` file should be of the following format, with values filled as necessary:

```
NODE_ENV= development
PORT=<port number>
POSTGRESQL_DB_URI='postgres://<username>:<password>@<host>:<postgresql_port>/<db_name>'
JWT_SECRET='<secret string for signing jwt>'
```

Example:

```
NODE_ENV= development
PORT=3000
POSTGRESQL_DB_URI='postgres://postgres:80167123@localhost:5432/assessment_task'
JWT_SECRET='taskphin'
```

4. Run the following 3 commands:
```
$ sudo npm i -g nodemon
$ export NODE_ENV=development
$ npm i
```

5. Run the application with the following command:
```
$ nodemon app.js
```

6. Go to your browser and open `localhost:<port number>`
