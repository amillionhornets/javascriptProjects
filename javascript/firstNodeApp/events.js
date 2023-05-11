
const EventEmitter = require('events')

const emitter = new EventEmitter();

// register listener
emitter.on('messageLogged', (arg) => {
    console.log('ListenerCalled', arg)
})
// raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});
// Emit means to make noise or produce something
// Raise: Logging(data: message)