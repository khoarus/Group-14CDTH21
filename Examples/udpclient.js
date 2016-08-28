//client.js
var PORT = 33333;
//var HOST = '192.168.137.10';
var HOST = '172.17.251.152';
var dgram = require('dgram');
var message = new Buffer('abcxef');

var client = dgram.createSocket('udp4');

//When the client socket receives the message event, handle it with this handler
client.on('message', function(message, remote){
console.log("Received from server: " + message);
});

//Send a message [message variable] to the host and port configured in the first two lines,
//logging as appropriate.
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
if (err) throw err;
console.log('UDP message sent to ' + HOST +':'+ PORT);
});