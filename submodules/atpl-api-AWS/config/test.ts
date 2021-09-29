var events = require('events');
var eventEmitter = new events.EventEmitter();

function function1() {

    console.log('Welcome to My Console,');
}

setTimeout(function1, 3000);
eventEmitter.on('connection', setTimeout);
