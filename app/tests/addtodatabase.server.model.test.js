'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Addtodatabase = mongoose.model('Addtodatabase');

/**
 * Globals
 */
var user, addtodatabase;

/**
 * Unit tests
 */
describe('Addtodatabase Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			addtodatabase = new Addtodatabase({
				name: 'Addtodatabase Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return addtodatabase.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			addtodatabase.name = '';

			return addtodatabase.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Addtodatabase.remove().exec();
		User.remove().exec();

		done();
	});
});