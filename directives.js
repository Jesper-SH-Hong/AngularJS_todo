//todo module에서 디렉티브만 모아서 지금 뺴옴
//근데 첫줄에 var app= angular.module('todo', []);가 없는 상태라 지금 todo 모듈 접근이 안됨.

//그래서 app 대신에 angular.module('todo')를 앞에 갈아 끼우면

//요래 하면 디렉티브 함수 사용 가능
angular.module('todo').directive('todoTitle', function () {
    return {
        template: '<h1> TODO LIST <h1>'
    }
});

angular.module('todo').directive('todoItem', function () {
    return {
        templateUrl: 'todoItem.tpl.html'



    }
});


angular.module('todo').directive('todoFilters', function () {
    return {
        templateUrl: 'todoFilters.tpl.html'



    }
});

angular.module('todo').directive('todoForm', function () {
    return {
        templateUrl: 'todoForm.tpl.html'



    }
});