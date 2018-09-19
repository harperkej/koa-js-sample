'use strict';

const mongoose = require('mongoose');
const configs = require('../configs');

const dbConfigs = '../db-configs';

const dbUrl = configs.readConfigs('DATBASE_URL', dbConfigs);
const dbName = configs.readConfigs('DATABASE_NAME', dbConfigs);

const connect = async () => {
    mongoose.connect(`${dbUrl}/${dbName}`, {
        useNewUrlParser: true
    });
    const connection = mongoose.connection;
    connection.on('error', (error) => {
        console.log('Error when trying to connect to db -> ', error);
    });
    connection.on('connected', () => {
        console.log('Connection to database successfully finished!');
    });
}

exports.connect = connect;