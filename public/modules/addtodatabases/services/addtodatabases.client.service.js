'use strict';

//Addtodatabases service used to communicate Addtodatabases REST endpoints
angular.module('addtodatabases').factory('Addtodatabases', ['$resource',
	function($resource) {
		return $resource('addtodatabases/:addtodatabaseId', { addtodatabaseId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);