'use strict';

	function DetailCtrl($scope, $routeParams, $http) {
	$http.get('data/' + $routeParams.projectId + '.json').success(function(data) {
    $scope.project = data;
    $scope.mainImageUrl = data.screenshot[0];
  });
    $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}