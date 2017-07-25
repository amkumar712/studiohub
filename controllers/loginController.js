var loginApp = angular.module('loginApp', []);

loginApp.config($interpolateProvider => {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
});

loginApp.controller('loginController', ($scope, $http) => {
  $scope.label = "this is label text";
});
