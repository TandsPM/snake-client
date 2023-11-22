const net = require("net");

// establishes a connection w/ the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  module.exports = connect;

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', function() {
    console.log('You are connected to the game server');
  });

  // send name to game
  const userName = "tpm";
  const displayMsg = `Name: ${userName}`;
  conn.write(displayMsg);

  conn.on('data', function(message){
    console.log(`${message}`);
  });

  process.stdin.on('name', function(message){
    const addMessage = `${process.argv[2]} > ${message}`;
    conn.write(addMessage);
  })
  
  return conn;
};

console.log("Connecting ...");
connect();