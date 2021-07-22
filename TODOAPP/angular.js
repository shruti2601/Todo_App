const app = angular.module("todoApp",[]);

app.controller("todoController", function($scope,$filter){
    $scope.task="";
    $scope.tasks=[];
    $scope.remainingCount = 0;

    $scope.addTask = function(){
        let taskObj = {title:$scope.task , status:false};
        $scope.tasks.push(taskObj);
        $scope.task="";
    }

    $scope.removeTask = function(idx){
        $scope.tasks.splice(idx,1);
    }

    $scope.clearCompleted = function(idx){
        $scope.tasks = $scope.tasks.filter(function(task){
            return !task.status;
        })
    }

});
