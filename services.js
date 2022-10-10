//여기도 app 아니다.

// 서비스 생성 시 3가지 함수. 결과는 같으나 서비스 정의 방법에 차이.
//.service
//.factory
//.provider


// param: 서비스명,  함수(해당 서비스의 구현)
// todo들을 관리하는 저장소라 todoStorage라 칭함


//controllers 가서 dependency를 injection해줘야 함. 
// 콜백펑션에 $scope했던 것처럼 todoStorage, $todoStorage라고 넣어주고 오셈
// 그리고 거기서 $scope.todos = todoStorage.get();해서 사용 가능 


angular.module('todo').factory('todoStorage', function () {
    var storage = {

        //data
        todos: [{
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

        ], //, 주의


        //getter
        get: function () {
            return storage.todos;
        },


        remove: (todo) => {
            //find todo index in todos array 
            var idx = storage.todos.findIndex((item) => {
                return item.id === todo.id;
            })

            //remove from todos
            if (idx > -1) {
                storage.todos.splice(idx, 1)
            }
        },

        add: (newTodoTitle) => {
            //create newTodo item
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                created: Date.now()
            };

            //push into existing todos array
            storage.todos.push(newTodo);
        }


    }



    return storage;
});


//이 todostorage서비스는 데이터 관리!하는 역할만 수행 