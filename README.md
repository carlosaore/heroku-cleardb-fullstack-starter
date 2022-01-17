<h1 align="center">heroku-cleardb-fullstack-starter</h1>
<p>
  <img alt="JavaScript" src="https://github.com/aleen42/badges/raw/master/src/javascript.svg" />
  <img alt="Node" src="https://badges.aleen42.com/src/node.svg"/>
  <img alt="React" src="https://github.com/aleen42/badges/raw/master/src/react.svg" />
  <img alt="React Router" src="https://raw.githubusercontent.com/aleen42/badges/master/src/react-router.svg" />
  <br />
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/carlosaore/heroku-cleardb-fullstack-starter#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/carlosaore/heroku-cleardb-fullstack-starter/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/carlosaore/heroku-cleardb-fullstack-starter/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/carlosaore/heroku-cleardb-fullstack-starter" />
  </a>
</p>

> Create full stack apps with React and Express.<br>Run your client and server with a single command.

### 🏠 [Homepage](https://github.com/carlosaore/heroku-cleardb-fullstack-starter#readme)

### ✨ [Live demo](https://frozen-brook-20118.herokuapp.com/)

## :computer: Install

```sh
## Install dependencies for server
npm install

# Install dependencies for client
npm run client-install
```

## :runner: Quick start

```sh
# Run the client & server with concurrently 
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## :page_facing_up: How to use this template

1. Fork it, then use your forked copy as a template when creating a new repository.
2. Make sure that you have:
    - [installed `concurrently` globally](https://www.npmjs.com/package/concurrently)
    - a Heroku account ([verified](https://devcenter.heroku.com/articles/account-verification))
    - [installed the Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) (and logged in)
3. Clone your new repository into your machine so you can work on it.
4. [Create a new Heroku app using the CLI from the app's root directory.](https://devcenter.heroku.com/articles/git#for-a-new-heroku-app)
5. [Install ClearDB in your Heroku app](https://devcenter.heroku.com/articles/cleardb)
6. [Create a `.env` file in the app's root directory](https://devcenter.heroku.com/articles/config-vars) like this:
    ```js
    DB_HOST=XXXXXX
    DB_USER=XXXXXX
    DB_PASSWORD=XXXXXX
    DB_DATABASE=XXXXXX
    ```
   See the link in step 5 for guidance on how to find those values.
7. [Set up you Config (aka env) variables in Heroku](https://devcenter.heroku.com/articles/config-vars) like this:
    ```js
    DB_HOST=XXXXXX
    DB_USER=XXXXXX
    DB_PASSWORD=XXXXXX
    DB_DATABASE=XXXXXX
   ```
   See the link in step 5 for guidance on how to find those values.
8. Adapt the code to your need.
9. Test your code by running `npm run dev` in your terminal.
10. [After committing any changes to the main branch, you can deploy them by doing `git push heroku main` from your terminal](https://devcenter.heroku.com/articles/git#deploying-code)
    .

## :nut_and_bolt: About the code

The purpose of this template is to be an educational tool for students learning web development.

It's a fullstack application using the SERN stack.

It offers both the backend and frontend from a single place for small projects and quick deploys to Heroku.

### Backend

Created with Express with a connection to a MySQL database, which can also be hosted in Heroku. It offers 2 endpoints:

- `/api`

  A GET request to this endpoint returns `"API is running"` if the server is up.
- `/api/users`

  A GET request to this endpoint returns the contents of a table named "users" that is stored in the
  database (`SELECT * FROM users;`)
  You can use the code provided in `/src/routes/usersRouter.js` to create your own MySQL query and route.

### Frontend

The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A bare-bones routing system is already included using React Router.

The styling is done with styled-components, with a globalStyles and a theme.js files.

Directories for [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) architecture are also provided.

Two different context are provided:

- one for storing and providing data fetched from one (or many) APIs
- another one for general purpose data and states. You can adapt them to suit your needs or use the code as a template
  to create your own contexts.

A textData.js is also provided. See `/client/src/components/pages/Home.js` for an example on how to use it.

## Author

👤 **Carlos Orellana**

* Github: [@carlosaore](https://github.com/carlosaore)
* LinkedIn: [@carlosaore](https://linkedin.com/in/carlosaore)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/carlosaore/heroku-cleardb-fullstack-starter/issues).

## :heart: Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Carlos Orellana](https://github.com/carlosaore).

This project is [MIT](https://github.com/carlosaore/heroku-cleardb-fullstack-starter/blob/main/LICENSE) licensed.
