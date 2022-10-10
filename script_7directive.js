(function () {
    var app = angular.module('todo', []);

    app.controller('TodoCtrl', ['$scope', function ($scope) {
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

    //이번엔 controller 말고 directive 설정
    //1st param: 내 디렉티브명.
    //2nd param: 함수
    //앵귤러 컨벤션. HTML에선 - 하지만 js는 카멜케이스
    app.directive('todoTitle', function () {
        return {
            //템플릿에 어떤 문자열을 리턴함. 그럼 그 디렉티브 사용하는 곳에서 이 스트링이 출력됨
            //템플릿엔 html 태그(ex.헤딩)도 출력가능
            template: '<h1> TODO LIST <h1>'
        }
    });

    //html에선 todo-item이지만 js에선 이렇게 카멜케이스로 받아서 둘이 이름이 약간 달라보여도 작동함
    app.directive('todoItem', function () {
        return {
            //템플릿에 그대로 복붙해와서 이렇게 해서 다 쏴주마..
            //근데 디렉티브는 이렇게 템플릿이 길어질 경우 templateUrl:로 파일명 지정도 가능
            templateUrl: 'todoItem.tpl.html'
            // template: 
            // '<div class = "input-group mb-3">' +
            //     '<div class = "input-group-text" >' +
            //         '<input class = "form-check-input mt-0" type = "checkbox" ng - model = "todo.completed" >' +
            //     '</div >' +
            //     '<input type = "text" class = "form-control" ng - model = "todo.title">' +
            //     '<span class = "input-group-btn">' +
            //     '<button class = "btn btn-danger" type = "button" ng - click = "remove(todo)" > Delete! < /button>' +
            //     ' </span> ' +


            // '</div>'
            // '<date> {{todo.created | date: "yyyy-MM-dd HH:mm:ss"}}</date>' +


        }
    });

})();