'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var addtodatabases = require('../../app/controllers/addtodatabases.server.controller');

	// Addtodatabases Routes
	app.route('/addtodatabases')
		.get(addtodatabases.list)
		.post(users.requiresLogin, addtodatabases.create);

	app.route('/addtodatabases/:addtodatabaseId')
		.get(addtodatabases.read)
		.put(users.requiresLogin, addtodatabases.hasAuthorization, addtodatabases.update)
		.delete(users.requiresLogin, addtodatabases.hasAuthorization, addtodatabases.delete);

	// Finish by binding the Addtodatabase middleware
	app.param('addtodatabaseId', addtodatabases.addtodatabaseByID);
};
