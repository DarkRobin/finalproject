'use strict';

// Addtodatabases controller
angular.module('addtodatabases').controller('AddtodatabasesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Addtodatabases',
	function($scope, $stateParams, $location, Authentication, Addtodatabases) {

		$scope.searchGame   = '';

		$scope.exceptEmptyComparator = function(actual, expected){
			if (!expected){
				return true;
			}
			return angular.equals(expected,actual);
		};

		

		$scope.authentication = Authentication;

		// Create new Addtodatabase
		$scope.create = function() {
			// Create new Addtodatabase object
			var addtodatabase = new Addtodatabases ({
				name: this.name
			});

			// Redirect after save
			addtodatabase.$save(function(response) {
				$location.path('addtodatabases/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Addtodatabase
		$scope.remove = function(addtodatabase) {
			if ( addtodatabase ) { 
				addtodatabase.$remove();

				for (var i in $scope.addtodatabases) {
					if ($scope.addtodatabases [i] === addtodatabase) {
						$scope.addtodatabases.splice(i, 1);
					}
				}
			} else {
				$scope.addtodatabase.$remove(function() {
					$location.path('addtodatabases');
				});
			}
		};

		// Update existing Addtodatabase
		$scope.update = function() {
			var addtodatabase = $scope.addtodatabase;

			addtodatabase.$update(function() {
				$location.path('addtodatabases/' + addtodatabase._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Addtodatabases
		$scope.find = function() {
			$scope.addtodatabases = Addtodatabases.query();
		};

		// Find existing Addtodatabase
		$scope.findOne = function() {
			$scope.addtodatabase = Addtodatabases.get({ 
				addtodatabaseId: $stateParams.addtodatabaseId
			});
		};
	}
]);