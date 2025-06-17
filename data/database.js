const dotenv = require('dotenv');
dotenv.config();

// data/database.js
// This module initializes and provides access to the MongoDB database connection
const MongoClient = require('mongodb').MongoClient;

// Initialize the database variable
let database;

// Function to initialize the database connection
const initDb = (callback) => {
    if (database) {
        console.log('Db is already initialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err);
    });
};

// Function to get the database instance
const getDatabase = () => {
    if (!database) {
        throw Error('Database not initialized')
    } 
    return database;
};

// Export the initDb and getDatabase functions
module.exports = {
    initDb,
    getDatabase
};