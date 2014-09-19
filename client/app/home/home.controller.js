'use strict';

angular.module('ngflbigmoonApp')
  .controller('HomeCtrl', function ($scope, $location) {
    $scope.isCollapsed = true;
    $scope.$on('$routeChangeSuccess', function() {
    	$scope.isCollapsed = true;
    });
  });
