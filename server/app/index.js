'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const routing = require('../routing');
const database = require('../database');
const validationErrorHandler = require('../error-handling');

const app = new Koa();
app.use(validationErrorHandler);
app.use(bodyParser());
app.use(routing.routes());

const start = async () => {
    console.log('Starting the app...');
    console.log('--------------------');
    console.log('Initiating connection to database...');
    await database.connect();
    console.log('Connected to database...');
    console.log('--------------------');
    console.log('Setting up the server..');
    await app.listen(3000);
    console.log('Server up and running.');
}

exports.start = start;