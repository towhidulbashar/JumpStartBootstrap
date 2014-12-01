'use strict'
const connect = require('connect'),
	serveStatic = require('serve-static')('../JumpStartBootstrap');

connect()
.use(serveStatic)
.listen(2345, function() {
	console.log('Server is listening on 2345');
});