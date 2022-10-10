//모듈 ( 큰 컨테이너. 내부에 컨트롤러, 디렉토리, 서비스 등 있음 )
// 그러므로 우린 컨트롤러를 만들 떄 이 투두 모듈에 만들어야 함


//angular 라이브러리의 .module함수; 모듈 정의.
//1st param; module name, 2nd; array. 
(function () {
        var app = angular.module('todo, []');
        //앱에 모듈 대입/할당


        //컨트롤러.  .controller 컨트롤러 정의하는 함수
        //첫 param은 컨트롤러명 보통 대문자로 시작. Ctrol은 컨트롤러 약자.
        //흥미로운 점은 모듈처럼 컨트롤러도 2nd param은 []이어야 함.
        //2nd param; [ fn ]

                                    //이렇게 $변수 주입해줘야 컨트롤러 내에서 사용 가능
        app.controller('TodoCtrl', ['$scope', function ($scope) {
            $scope.name = "jesper"
            //ctrl와 view(html파일) 간의 어떤 연결고리 역할. 예를 들어 scope에 name이란 변수 넣어서 이렇게 Jesper 할당하고, index에서 ng-init을 지워도 됨.

        }]);

    }

    //이걸 어케 넣냐. index body에 ng-app