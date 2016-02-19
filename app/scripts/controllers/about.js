'use strict';

/**
 * @ngdoc function
 * @name localWeatherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the localWeatherApp
 */
angular.module('localWeatherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Simple Local Weather App',
      'Allows Searching by Zipcode',
      'Toggle Between Celcius & Farhenheit'
    ];
  });
