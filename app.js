(function(window, angular) {

  angular.module('app', []).

  controller('todoCtrl', function(){
    this.tasks = [];
    this.task = {};

    this.addTask = function(task) {
      if(task.complete == null) {
        task.complete = false;
        this.tasks.push(task);
        this.task = {};
      } else {
        this.task = {};
      }
    };
    
    this.removeTask = function(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    };

    this.editTask = function(task) {
      this.task = task;
    };
  })

})(window, angular);