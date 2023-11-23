const net = require("net");
//const { IP, PORT } = require("./constants");

// establishes a connection w/ the game server
const connect = function() {
  // create TCP connection
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

 

  // interpret incoming data as text
  conn.setEncoding("utf8");

  
  conn.on('connect', function() {
    console.log('You are connected to the game server');
    // send name to game to send to server
    const userName = "tpm";
    const displayMsg = `Name: ${userName}`;
    conn.write(displayMsg);


    const messageToDisplay = "Say: ____";
    conn.write(messageToDisplay);
  });


  conn.on('data', function(message) {
    console.log(`${message}`);
  });

  return conn;
};

module.exports = connect;