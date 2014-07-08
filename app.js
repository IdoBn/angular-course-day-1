(function(window, angular) {

  angular.module('app', [])
    .controller('todoCtrl', todoCtrl)
    .factory('localStoreService', localStoreService); 

  function todoCtrl(localStoreService) {
    this.tasks = localStoreService.get('tasks');
    this.task = {};

    this.saveTask = function(task) {
      if(task && task.complete == null) {
        this.tasks.push({
          title: task.title,
          desc: task.desc,
          complete: false
        });
      }
      this.task = {};
      localStoreService.set('tasks',this.tasks);
    };
    
    this.removeTask = function(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      localStoreService.set('tasks',this.tasks);
    };

    this.editTask = function(task) {
      this.task = task;
    };
  };

  function localStoreService() {
    return {
      get: function(str) {
        if (!localStorage.getItem(str)) {
          localStorage.setItem(str, angular.toJson(new Array()));  
        };
        return JSON.parse(localStorage.getItem(str));
      },
      set: function(str, items) {
        localStorage.setItem(str, angular.toJson(items));
      }
    };
  };

})(window, angular);