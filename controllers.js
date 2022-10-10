angular.module('todo').controller('TodoCtrl', ['$scope', 'todoStorage', function ($scope, todoStorage) {
    $scope.name = "jesper";


    $scope.todos = todoStorage.get();

    // $scope.todos = [{
    //         title: 'Yoga Session',
    //         completed: false,
    //         created: Date.now()
    //     },

    //     {
    //         title: 'Lab02',
    //         completed: false,
    //         created: Date.now()
    //     },

    //     {
    //         title: 'Laundry',
    //         completed: true,
    //         created: Date.now()
    //     }

    // ];

    $scope.remove = function (todo) {
        todoStorage.remove(todo)

    };


    $scope.add = function (newTodoTitle) {

        todoStorage.add(newTodoTitle);
        $scope.newTodoTitle='';


    }


}]);