# React Express MySQL Starter Pack

> Create full stack apps with React and Express. Run your client and server with a single command.


## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently 
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## How to use this template

1. Fork it.
2. Make sure that you have:
    - [installed `concurrently` globally](https://www.npmjs.com/package/concurrently)
    - that you have a Heroku account
    - that you have [installed the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (and logged in).
3. [Create a new Heroku app using the CLI from the app's root directory.](https://devcenter.heroku.com/articles/git#for-a-new-heroku-app)
4. [Install ClearDB in your Heroku app](https://devcenter.heroku.com/articles/cleardb)
5. [Create a `.env` file in the app's root directory](https://devcenter.heroku.com/articles/config-vars) like this:
    ```
    DB_HOST=XXXXXXX
    DB_USER=XXXXXXXX
    DB_PASSWORD=XXXXXXXX
    DB_DATABASE=XXXXXXXX
    ```
    See the link in step 4 for guidance on how to find those values.
6. [Set up you Config (aka env) variables in Heroku](https://devcenter.heroku.com/articles/config-vars) like this:
    ```
    DB_HOST=XXXXXXX
    DB_USER=XXXXXXXX
    DB_PASSWORD=XXXXXXXX
    DB_DATABASE=XXXXXXXX
   ```
    See the link in step 4 for guidance on how to find those values.
7. Adapt the code to your need.
8. Test your code by running `npm run dev` in your terminal.
9. [After committing any changes to the main branch, you can deploy them by doing `git push heroku main` from your terminal](https://devcenter.heroku.com/articles/git#deploying-code).

## App Info

### Author
Carlos Orellana

### Version

1.0.0

## About the code
The purpose of this template is to be an educational tool for students learning web development.
It offers both the backend and frontend from a single place for small projects and quick deploys to Heroku.
It's a fullstack application using the SERN stack.

### Backend

Created with express with a connection to a MySQL database that can also be hosted in Heroku.
It offers 2 endpoints:
- `/api`
  
   A GET request to this endpoint returns "API is running" if the server is up.
- `/api/users`
    
    A GET request to this endpoint returns the contents of a table named "users" that is stored in the database (`SELECT * FROM users;`)
    You can use the code provided in `/src/routes/usersRouter.js` to create your own MySQL query and route.

### Frontend

The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
A bare-bones routing system is already included using React Router.

The styling is done with styled-components, with globalStyles and a theme.js files.

Directories for atomic design architecture are provided.

Two different context are provided:
- one for to be fetched from one or many APIs
- another one for general purpose data and states.

A textData.js is also provided. See `/client/src/components/pages/Home.js` for an example on how to use it.

### License

This project is licensed under the MIT License

### Contributing

Contact me for guidance on how to contribute.


