'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Addtodatabase = mongoose.model('Addtodatabase'),
	_ = require('lodash');

/**
 * Create a Addtodatabase
 */
exports.create = function(req, res) {
	var addtodatabase = new Addtodatabase(req.body);
	addtodatabase.user = req.user;

	addtodatabase.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(addtodatabase);
		}
	});
};

/**
 * Show the current Addtodatabase
 */
exports.read = function(req, res) {
	res.jsonp(req.addtodatabase);
};

/**
 * Update a Addtodatabase
 */
exports.update = function(req, res) {
	var addtodatabase = req.addtodatabase ;

	addtodatabase = _.extend(addtodatabase , req.body);

	addtodatabase.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(addtodatabase);
		}
	});
};

/**
 * Delete an Addtodatabase
 */
exports.delete = function(req, res) {
	var addtodatabase = req.addtodatabase ;

	addtodatabase.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(addtodatabase);
		}
	});
};

/**
 * List of Addtodatabases
 */
exports.list = function(req, res) { 
	Addtodatabase.find().sort('-created').populate('user', 'displayName').exec(function(err, addtodatabases) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(addtodatabases);
		}
	});
};

/**
 * Addtodatabase middleware
 */
exports.addtodatabaseByID = function(req, res, next, id) { 
	Addtodatabase.findById(id).populate('user', 'displayName').exec(function(err, addtodatabase) {
		if (err) return next(err);
		if (! addtodatabase) return next(new Error('Failed to load Addtodatabase ' + id));
		req.addtodatabase = addtodatabase ;
		next();
	});
};

/**
 * Addtodatabase authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.addtodatabase.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
