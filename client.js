var dgram = require('dgram');
var message = new Buffer("A message to log.");

var client = dgram.createSocket("udp4");

client.send(message, 0, message.length, 514, "localhost", function (err, bytes) {
  if (err) {
    throw err;
  }
  console.log("Wrote " + bytes + " bytes to socket.");
});
