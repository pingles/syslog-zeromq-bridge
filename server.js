var sys = require("sys");
var dgram = require("dgram");

var zeromq = require("zeromq");
var publisher = zeromq.createSocket('pub');
publisher.bind("tcp://*:5556", function(err) {
  if (err) throw err;
  console.log("Bound to tcp://*:5556");
});

var server = dgram.createSocket("udp4");

server.on("message", function(msg, rinfo) {
  console.log("got: <" + msg + "> from <" + rinfo.address + ">");
  publisher.send(msg);
});

server.on("listening", function() {
  console.log("server listening " + server.address().address);
});

server.bind(514);
