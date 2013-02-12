'use strict';

function MainCtrl($scope, $http) {
  $http.get('data/project_list.json').success(function(data) {
  $scope.thing = data;
  $scope.cat = data;
  $scope.orderProp = 'age';

   $scope.active = function(x) {
        return x == $scope.cat ? 'active' : '';
    }
  
  });



}