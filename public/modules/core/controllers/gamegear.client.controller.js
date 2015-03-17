'use strict';

angular.module('core').controller('GamegearController', ['$scope', '$http',
	function($scope, $http) {
		$scope.searchGame   = '';
		$http.get('/modules/core/gamedb/gamedb.json').success(function(data){
			$scope.gamedb = data;
		});

    $scope.orderProp = 'age';
	}
]);