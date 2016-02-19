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
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var appId = '&appid=44db6a862fba0b067b1930da0d769e98';

    navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
      $http.get(url+'lat='+lat+'&lon='+long+appId,{timeout: 3000}).
        success(function(data,status){
          $scope.temp = data.main.temp;
          $scope.weatherType = data.weather[0].main;
          $scope.status = status;
        }).
        error(function(status){
          console.log('SERVER ERROR', status);
        });
    });

    $scope.lookup = function(){
      if ($scope.zip) {
        $http.get(url+'zip='+$scope.zip+appId,{timeout: 3000}).
          success(function(data,status){
            $scope.temp = data.main.temp;
            $scope.weatherType = data.weather[0].main;
            $scope.status = status;
          }).
          error(function(status){
            console.log('SERVER ERROR', status);
          });
      }
    };
});
