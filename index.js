const Logger = require('./logger');

const logger = new Logger();

logger.on('Message', data => console.log('Called Listener', data));

logger.log('Hello World');