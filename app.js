(function(window, angular) {

  angular.module('app', [])
    .controller('todoCtrl', todoCtrl)
    .factory('localTodo', localTodoService); 

  function todoCtrl(localTodo) {
    //localTodo.add({ title: 'test', desc: 'a desc', complete: false  });

    this.tasks = localTodo.get();
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
      console.log(this.tasks)
      localTodo.set(this.tasks);
    };
    
    this.removeTask = function(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      localTodo.set(this.tasks);
    };

    this.editTask = function(task) {
      this.task = task;
    };
  };

  function localTodoService() {
    var tasks = null;
    try {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    } catch(error) {
      tasks = [{title: 'first task', desc: 'you should write more tasks', complete: false}];
    }

    localStorage.setItem('tasks', angular.toJson(tasks));

    return {
      get: function() {
        return JSON.parse(localStorage.getItem('tasks'));
      },
      set: function(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    };
  };

})(window, angular);