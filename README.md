# Webpage
The official repository for building the new webpage for BioTork

Git Etiquette

* Git Keywords
  * To see which files you've modified/added/deleted, and which changes are staged to be commited, use `git status`
  * To view the changes you've made to each file use `git diff`
  * `git add <file_name>` will add the file you specify to staging
  * To stage all files you've changed, use `git add .`
  * To create a new commit with all the files you have staged, type `git commit -m <message>`
  * `git hist` will show you a history of all the commits you have added to your repository

* Before Anything
  * Use `git clone <remote_uri>``
  * Use `git pull` to pull all recent changes in the repository
  * Use `git add -a` to add all new changes
  * Always use comments when committing
  * CREATE A NEW BRANCH FOR EVERY FEATURE
  * Before merging to master, you must have your code reviewed and approved by someone else

* Merging and Pull requests
  * You must take out a pull request in order to merge your changes into master
  * All pull requests require one independent code review and approval
  * Please use `Squash and merge` as it is neater

 * Creating a new branch
  1. `git pull` (To get current repository)
  2. `git checkout -b [name_of_your_new_branch]` (checkout of current branch into new branch)
  3. `git push origin [name_of_your_new_branch]` (push new branch to repository)
  Note: use `git branch -a` to see all branches

 * Remote Repositories
   * Import a remote repository to local machine with: `git remote add <remote_name> <remote_uri>`
   * `git remote` will provide you the names of remote versions of the repository that exist on your local machine.
   * Push progress to your remote branch as frequently as necessary, as this is your only backup (like cloud storage)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project contains an example project board meant to showcase how one can be used. The issues posted to it are not real issues.

#### _**IMPORTANT NOTE**_ - 
This project does not have a mongoDB connection setup. Setup the connection based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".

## Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
