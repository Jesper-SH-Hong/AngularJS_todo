// var app = angular.module('todo', []);


//global var. 그래서 var에 할당하지 않음 

//저대로면 app이 전역변수로 되서 
//browser's WINDOWs object에 추가됨.
//전역변수가 오염됨.. 그래서 todo란 모듈을 선언만 함.

angular.module('todo', []);

//todo라는 angular 모듈을 정의함
//controllers.js에서는 ctrler들 정의. TodoCtrl만 정의됐음

//directives.js는 우리가 만든 4개 angular directives 정의
//각 디렉티브 별 별도 template은 따로 tpl 파일들도 분리함.

//기능별로 파일을 쪼개고 모듈화 해서 코드 관리가 수워해짐.