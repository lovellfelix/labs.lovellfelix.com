var module = angular.module('module', []);

module.factory('itemService', function() {
    return {
        getAll : function() {
            var items = [];
            for (var i = 1; i < 25; i++) {
                items.push('Item ' + i);                       
            }
            return items;
        }
    };              
});
    
ListController = function($scope, itemService) {
    var pagesShown = 1;
    var pageSize = 5;
    $scope.items = itemService.getAll();
    $scope.itemsLimit = function() {
        return pageSize * pagesShown;
    };
    $scope.hasMoreItemsToShow = function() {
        return pagesShown < ($scope.items.length / pageSize);
    };
    $scope.showMoreItems = function() {
        pagesShown = pagesShown + 1;         
    };