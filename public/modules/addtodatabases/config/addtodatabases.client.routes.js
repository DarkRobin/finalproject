'use strict';

//Setting up route
angular.module('addtodatabases').config(['$stateProvider',
	function($stateProvider) {
		// Addtodatabases state routing
		$stateProvider.
		state('listAddtodatabases', {
			url: '/addtodatabases',
			templateUrl: 'modules/addtodatabases/views/list-addtodatabases.client.view.html'
		}).
		state('createAddtodatabase', {
			url: '/addtodatabases/create',
			templateUrl: 'modules/addtodatabases/views/create-addtodatabase.client.view.html'
		}).
		//Chaneged route to my library
		state('viewAddtodatabase', {
			url: '/addtodatabases/view',
			templateUrl: 'modules/addtodatabases/views/view-addtodatabase.client.view.html'
		}).
		state('editAddtodatabase', {
			url: '/addtodatabases/:addtodatabaseId/edit',
			templateUrl: 'modules/addtodatabases/views/edit-addtodatabase.client.view.html'
		});
	}
]);