const connect = require("./client");
const { IP, PORT } = require("./constants");
const setupInput = require("./input");



console.log("Connecting ...");
const connection = connect();

setupInput(connection);

