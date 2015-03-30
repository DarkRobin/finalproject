'use strict';

angular.module('core')
.directive("addToLibraryForm", ['$location','Addtodatabases', function($location, Addtodatabases) {
	return {
		restrict: "A",
		scope: {
			currentGame: "="
		},
		link: function(scope, element, attr) {
			element.bind("click", function() {
				console.log(scope.currentGame);
				create(scope.currentGame);
			});

			var create = function(data) {
				// Create new Addtodatabase object
				console.log(Addtodatabases);
				var addtodatabase = new Addtodatabases ({
					
					FIELD2: data.FIELD2,
					FIELD3: data.FIELD3,
					FIELD4: data.FIELD4,
					
					FIELD6: data.FIELD6
				});

				// Redirect after save
				addtodatabase.$save(function(response) {
					console.log("Success: ", response);

				}, function(errorResponse) {
					var error = errorResponse.data.message;
					console.log("Error: ", error);
				});
			};
		}

	};
}])

.controller('AddagameController', ['$scope',
	function($scope) {
	

		$scope.orderProp = 'age';
	}
]);