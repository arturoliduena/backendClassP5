var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('click', function() {
  console.log('alguien hizo click');
});

emitter.on('click', function() {
  console.log('segundo aviso de que alguien hizo click!');
});

emitter.emit('click');
