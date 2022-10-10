//모듈 ( 큰 컨테이너. 내부에 컨트롤러, 디렉토리, 서비스 등 있음 )
// 그러므로 우린 컨트롤러를 만들 떄 이 투두 모듈에 만들어야 함


//angular 라이브러리의 .module함수; 모듈 정의.
//1st param; module name, 2nd; array. 
//클로져
(function () {
        var app = angular.module('todo', []);

        app.controller('TodoCtrl', ['$scope', function ($scope) {
                $scope.name = "jesper";

                //todo 개체 선언
                // $scope.todo = {
                //     title: 'Yoga Session',
                //     completed: false,
                //     created: Date.now() //unix timestamp

                // }

                //todos 배열 선언

                $scope.todos = [
                    {
                        title: 'Yoga Session',
                        completed: false,
                        created: Date.now() //unix timestamp
                    },

                    {
                        title: 'Lab02',
                        completed: false,
                        created: Date.now() //unix timestamp
                    },

                    {
                        title: 'Laundry',
                        completed: true,
                        created: Date.now() //unix timestamp
                    }

                ];

                // todos에서 arg인 todo놈 삭제
                $scope.remove = function(todo) {
                    //find todo index in todos array  (findIndex; 콜백함수가 true 뱉을 때까지 찾아서 그게 몇번쨰 인덱스에 있는지 알려줌, find: 찾은 '값'을 반환)
                    var idx = $scope.todos.findIndex((item) => {
                        return item.id === todo.id;
                    })

                    //remove from todos
                    if(idx > -1) {
                        $scope.todos.splice(idx, 1) // 배열의 해당 인덱스부터 1개 제거.  splice;삭제도, 추갇 ㅗ가능
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
                    $scope.newTodoTitle ="";



                }


        }]);

})();