'use strict';

angular.module('core').controller('PsxController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('/modules/core/gamedb/gamedb.json').success(function(data){
			$scope.gamedb = data;
		});

    $scope.orderProp = 'age';
	}
]);