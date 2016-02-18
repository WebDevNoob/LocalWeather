'use strict';

/**
 * @ngdoc function
 * @name localWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the localWeatherApp
 */
angular.module('localWeatherApp')
  .controller('MainCtrl', function ($scope, $http) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=44db6a862fba0b067b1930da0d769e98',{timeout: 3000}).
        success(function(data,status){
          $scope.temp = data.main.temp;
          $scope.status = status;
        }).
        error(function(status){
          console.log('SERVER ERROR', status);
        });
    });
});
