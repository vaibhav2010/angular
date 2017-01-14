(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope) {
    $scope.message="";
    $scope.message1="";
    $scope.fc="#555";
    $scope.bc="#ccc";
    $scope.check=function () {
      var string=$scope.message;
      var c=0;
      var array=string.split(",");
      for (var prop in array) {
        if (array[prop]!=" "){
          c++;
        }
      }
        if ($scope.message===""){
          $scope.message1="Please enter data first";
          $scope.fc="red";$scope.bc="red";
        }
        else if (c<4) {
          $scope.message1="Enjoy!";$scope.fc="green";$scope.bc="green";
        }
        else {
          $scope.message1="Too Much!";$scope.fc="green";$scope.bc="green";
        }
    }
  }
})();
