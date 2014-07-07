(function(window, angular) {

  angular.module('app', []).

  controller('todoCtrl', ['$scope', function($scope){
    $scope.tasks = [];
    $scope.task = {};
    $scope.edit = false;

    $scope.addTask = function(task) {
      task.complete = false;
      $scope.tasks.push(task);
      $scope.task = {}
    };
    
    $scope.removeTask = function(task) {
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
    };

    $scope.editTask = function(task) {
      $scope.task = task;
      $scope.edit = true;
    };
  }])

})(window, angular);