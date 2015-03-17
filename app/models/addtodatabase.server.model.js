'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Addtodatabase Schema
 */
var AddtodatabaseSchema = new Schema({
	FIELD1: {
		type: Number
	},
	FIELD2: {
		type: String
	},
	FIELD3: {
		type: String
	},
	FIELD4: {
		type: Number
	},
	FIELD5: {
		type: Number
	},
	FIELD6: {
		type: String
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Addtodatabase', AddtodatabaseSchema);