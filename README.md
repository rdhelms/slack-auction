Tools Summary
============
* Core
    * [Node](https://nodejs.org/api/)
    * [Express](https://expressjs.com/)
* DX
    * [TypeScript](https://www.typescriptlang.org/docs/home.html)
    * [TSLint](https://palantir.github.io/tslint/rules/)
* Testing
    * [Mocha](https://mochajs.org/)
    * [Chai](http://www.chaijs.com/api/bdd/)
    * [Istanbul/nyc](https://www.npmjs.com/package/nyc)
* Deployment
    * [Heroku](https://heroku.com/)

Installation
============
`npm install`

Environment Variables
============

Create a root `.env` file with contents in the format VAR=VALUE in order to specify environment variables when running the app locally.

For example,
```
NODE_ENV=development
```

Building the App
============
`npm run build`

#### Delete dist folder and then rebuild
`npm run build-clean`

#### Build and watch for changes
`npm run build-watch`

Linting
============
`npm run lint`

Testing
============
`npm test`

#### Generate Test Coverage
`npm run coverage`

#### View Test Coverage
`npm run view-coverage`

Starting the App
============

`npm start`

Deploying the App
============
[Provisioning the Heroku Postgres addon](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres) [[Info](https://elements.heroku.com/addons/heroku-postgresql)] 


For help deplying a Node.js app to heroku:\
[Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)