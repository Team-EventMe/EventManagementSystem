'use strict';
let connectionStrings = {
    production: process.env.CONNECTION_STRING,
    development: 'mongodb://localhost:27017/events-db'
};

// TODO: SET SESSION_SECRET AND CONNECTION_STRING CONSTANTS
module.exports = {
    environment: process.env.NODE_ENV || 'development',
    connectionString: connectionStrings[process.env.NODE_ENV || 'development'],
    port: process.env.PORT || 3000,
    sessionSecret: process.env.SESSION_SECRET || '[session_secret]'
};