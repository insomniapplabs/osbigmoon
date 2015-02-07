'use strict';

angular.module('ngflbigmoonApp')
  .controller('HomeCtrl', function ($scope, $location, $anchorScroll, ngDialog, $http) {

    $scope.isCollapsed = true;

    $scope.$on('$routeChangeSuccess', function() {
    	$scope.isCollapsed = true;
    });

   	$scope.scrollTo = function(id) {
   		$location.hash(id);
   		console.log($location.hash());
   		$anchorScroll();
   	};

    $scope.sendContactEmail = function() {
      $http.post('/api/contacts', {
        name: $scope.contactName,
        email: $scope.contactEmail,
        message: $scope.contactMessage
      });
      $scope.contactName = '';
      $scope.contactEmail = '';
      $scope.contactMessage = '';
      //console.log('Send an email.')
    };



    $scope.clickToOpen = function () {
      ngDialog.open({ template: 'popupTmpl', className: 'ngdialog-theme-plain' });
      console.log('Clicking the modal');
    };

    $scope.openOThePlaces = function () {
      ngDialog.open({ template: 'oThePlaces', className: 'ngdialog-theme-plain' });
    };

    $scope.openDogWeb = function () {
      ngDialog.open({ template: 'dogWeb', className: 'ngdialog-theme-plain' });
    };

    $scope.openLab = function () {
      ngDialog.open({ template: 'labs', className: 'ngdialog-theme-plain' });
    };

    $scope.openLakewood = function () {
      ngDialog.open({ template: 'lakewood', className: 'ngdialog-theme-plain' });
    };

    $scope.openBrick = function () {
      ngDialog.open({ template: 'brick', className: 'ngdialog-theme-plain' });
    };

    $scope.openWish = function () {
      ngDialog.open({ template: 'wish', className: 'ngdialog-theme-plain' });
    };

    $scope.openHarvick = function () {
      ngDialog.open({ template: 'harvick', className: 'ngdialog-theme-plain' });
    };

    $scope.openMarried = function () {
      ngDialog.open({ template: 'married', className: 'ngdialog-theme-plain' });
    };

    $scope.openMati = function () {
      ngDialog.open({ template: 'mati', className: 'ngdialog-theme-plain' });
    };



  });
