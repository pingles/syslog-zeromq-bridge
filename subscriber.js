var zeromq = require('zeromq');
var subscriber = zeromq.createSocket('sub');
subscriber.connect("tcp://127.0.0.1:5556");
subscriber.subscribe("");

subscriber.on("error", function(error) {
  console.log("Error subscribing: " + error);
});

subscriber.on("message", function(msg) {
  console.log("Subscriber Received: " + msg);
});

console.log('started listening');
