'use strict';

angular.module('Services', ['ngResource']).
    factory('Phone', function($resource){
  return $resource('data/:projectId.json', {}, {
    query: {method:'GET', params:{projectId:'project'}, isArray:true}
  });
});