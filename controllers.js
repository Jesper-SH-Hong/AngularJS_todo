angular.module('todo').controller('TodoCtrl', ['$scope', function ($scope) {
    $scope.name = "jesper";

    $scope.todos = [{
            title: 'Yoga Session',
            completed: false,
            created: Date.now()
        },

        {
            title: 'Lab02',
            completed: false,
            created: Date.now()
        },

        {
            title: 'Laundry',
            completed: true,
            created: Date.now()
        }

    ];

    $scope.remove = function (todo) {
        //find todo index in todos array 
        var idx = $scope.todos.findIndex((item) => {
            return item.id === todo.id;
        })

        //remove from todos
        if (idx > -1) {
            $scope.todos.splice(idx, 1)
        }

    };


    $scope.add = function (newTodoTitle) {
        // alert(newTodoTitle);

        //create new todo
        var newTodo = {
            title: newTodoTitle,
            completed: false,
            created: Date.now()
        };



        //push into existing todos array
        $scope.todos.push(newTodo);

        //empty form
        $scope.newTodoTitle = "";



    }


}]);