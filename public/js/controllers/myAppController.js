var myApp = angular.module('myApp', []);

myApp.config($interpolateProvider => {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
});
