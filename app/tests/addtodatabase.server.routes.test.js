'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Addtodatabase = mongoose.model('Addtodatabase'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, addtodatabase;

/**
 * Addtodatabase routes tests
 */
describe('Addtodatabase CRUD tests', function() {
	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			username: 'username',
			password: 'password'
		};

		// Create a new user
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: credentials.username,
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new Addtodatabase
		user.save(function() {
			addtodatabase = {
				name: 'Addtodatabase Name'
			};

			done();
		});
	});

	it('should be able to save Addtodatabase instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Addtodatabase
				agent.post('/addtodatabases')
					.send(addtodatabase)
					.expect(200)
					.end(function(addtodatabaseSaveErr, addtodatabaseSaveRes) {
						// Handle Addtodatabase save error
						if (addtodatabaseSaveErr) done(addtodatabaseSaveErr);

						// Get a list of Addtodatabases
						agent.get('/addtodatabases')
							.end(function(addtodatabasesGetErr, addtodatabasesGetRes) {
								// Handle Addtodatabase save error
								if (addtodatabasesGetErr) done(addtodatabasesGetErr);

								// Get Addtodatabases list
								var addtodatabases = addtodatabasesGetRes.body;

								// Set assertions
								(addtodatabases[0].user._id).should.equal(userId);
								(addtodatabases[0].name).should.match('Addtodatabase Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Addtodatabase instance if not logged in', function(done) {
		agent.post('/addtodatabases')
			.send(addtodatabase)
			.expect(401)
			.end(function(addtodatabaseSaveErr, addtodatabaseSaveRes) {
				// Call the assertion callback
				done(addtodatabaseSaveErr);
			});
	});

	it('should not be able to save Addtodatabase instance if no name is provided', function(done) {
		// Invalidate name field
		addtodatabase.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Addtodatabase
				agent.post('/addtodatabases')
					.send(addtodatabase)
					.expect(400)
					.end(function(addtodatabaseSaveErr, addtodatabaseSaveRes) {
						// Set message assertion
						(addtodatabaseSaveRes.body.message).should.match('Please fill Addtodatabase name');
						
						// Handle Addtodatabase save error
						done(addtodatabaseSaveErr);
					});
			});
	});

	it('should be able to update Addtodatabase instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Addtodatabase
				agent.post('/addtodatabases')
					.send(addtodatabase)
					.expect(200)
					.end(function(addtodatabaseSaveErr, addtodatabaseSaveRes) {
						// Handle Addtodatabase save error
						if (addtodatabaseSaveErr) done(addtodatabaseSaveErr);

						// Update Addtodatabase name
						addtodatabase.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Addtodatabase
						agent.put('/addtodatabases/' + addtodatabaseSaveRes.body._id)
							.send(addtodatabase)
							.expect(200)
							.end(function(addtodatabaseUpdateErr, addtodatabaseUpdateRes) {
								// Handle Addtodatabase update error
								if (addtodatabaseUpdateErr) done(addtodatabaseUpdateErr);

								// Set assertions
								(addtodatabaseUpdateRes.body._id).should.equal(addtodatabaseSaveRes.body._id);
								(addtodatabaseUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Addtodatabases if not signed in', function(done) {
		// Create new Addtodatabase model instance
		var addtodatabaseObj = new Addtodatabase(addtodatabase);

		// Save the Addtodatabase
		addtodatabaseObj.save(function() {
			// Request Addtodatabases
			request(app).get('/addtodatabases')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Addtodatabase if not signed in', function(done) {
		// Create new Addtodatabase model instance
		var addtodatabaseObj = new Addtodatabase(addtodatabase);

		// Save the Addtodatabase
		addtodatabaseObj.save(function() {
			request(app).get('/addtodatabases/' + addtodatabaseObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', addtodatabase.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Addtodatabase instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Addtodatabase
				agent.post('/addtodatabases')
					.send(addtodatabase)
					.expect(200)
					.end(function(addtodatabaseSaveErr, addtodatabaseSaveRes) {
						// Handle Addtodatabase save error
						if (addtodatabaseSaveErr) done(addtodatabaseSaveErr);

						// Delete existing Addtodatabase
						agent.delete('/addtodatabases/' + addtodatabaseSaveRes.body._id)
							.send(addtodatabase)
							.expect(200)
							.end(function(addtodatabaseDeleteErr, addtodatabaseDeleteRes) {
								// Handle Addtodatabase error error
								if (addtodatabaseDeleteErr) done(addtodatabaseDeleteErr);

								// Set assertions
								(addtodatabaseDeleteRes.body._id).should.equal(addtodatabaseSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Addtodatabase instance if not signed in', function(done) {
		// Set Addtodatabase user 
		addtodatabase.user = user;

		// Create new Addtodatabase model instance
		var addtodatabaseObj = new Addtodatabase(addtodatabase);

		// Save the Addtodatabase
		addtodatabaseObj.save(function() {
			// Try deleting Addtodatabase
			request(app).delete('/addtodatabases/' + addtodatabaseObj._id)
			.expect(401)
			.end(function(addtodatabaseDeleteErr, addtodatabaseDeleteRes) {
				// Set message assertion
				(addtodatabaseDeleteRes.body.message).should.match('User is not logged in');

				// Handle Addtodatabase error error
				done(addtodatabaseDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		Addtodatabase.remove().exec();
		done();
	});
});