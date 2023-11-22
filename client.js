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

  conn.on("connect", (data) => {
    console.log("You ded cuz you idled", data);
  });
  

  return conn;
};



console.log("Connecting ...");
connect();