var sys = require("sys");
var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("message", function(msg, rinfo) {
  console.log("got: <" + msg + "> from <" + rinfo.address + ">");
});

server.on("listening", function() {
  console.log("server listening " + server.address().address);
});

server.bind(514);
