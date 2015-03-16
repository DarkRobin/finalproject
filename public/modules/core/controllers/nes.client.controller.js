'use strict';

angular.module('core',['addtodatabases'])
.directive("addToLibrary", ['Addtodatabases', function($location, Addtodatabases) {
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
					FIELD1: data.FIELD1,
					FIELD2: data.FIELD2,
					FIELD3: data.FIELD3,
					FIELD4: data.FIELD4,
					FIELD5: data.FIELD5,
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
.controller('NesController', ['$scope', '$http',
	function($scope, $http) {
	
		$http.get('/modules/core/gamedb/gamedb.json').success(function(data){
			$scope.gamedb = data;
		});

    $scope.orderProp = 'age';

    
	// $scope.gamedb = [
	// {
 //    "FIELD1":"16491",
 //    "FIELD2":"3DO",
 //    "FIELD3":"20th Century Video Almanac",
 //    "FIELD4":"$2.99",
 //    "FIELD5":"$22.99",
 //    "FIELD6":"Action & Adventure"
 //  },
 //  {
 //    "FIELD1":"16492",
 //    "FIELD2":"3DO",
 //    "FIELD3":"3D Atlas",
 //    "FIELD4":"$3.99",
 //    "FIELD5":"$19.98",
 //    "FIELD6":"Action & Adventure"
 //  },
 //  {
 //    "FIELD1":"16493",
 //    "FIELD2":"3DO",
 //    "FIELD3":"3DO Buffet",
 //    "FIELD4":"$2.15",
 //    "FIELD5":"$14.99",
 //    "FIELD6":"Action & Adventure"
 //  }

	// ];

  }]);

