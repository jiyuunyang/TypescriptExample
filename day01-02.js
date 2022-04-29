//TODO Typescript 필수문법 10분 정리와 설치 셋팅 (Vue, React 포함)
// node.js설치 → VScode → 터미널
// npm intall -g typescript
// 터미널에 tsc -w 입력해두면 js로 자동 변환됨. 파일 사용 시에는 js쓸 것
// 리액트에서 TS 쓸 때
// 기존 것에서 추가시
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// 새로운 프로젝트 생성시 
// npx create-react-app my-app --template typescript
// Vue에서 TS 쓸 때
// vue add typescript
// <script lang="ts"> </script>
//TODO 타입 스크립트 컴파일시 세부설정
// tsconfig.json 파일로 가시오
//TODO 타입 스크립트 기본 타입 정리(primitive types)
var 이름 = 'kim'; //타입 엄격 관리
var 배열 = ['kim', 'park']; //배열의 타입 관리
var 객체 = { name: 'kim' }; //name 속성은 옵션(?)
var 내이름 = 'kim'; //union type
내이름 = 123;
var 내타입 = 123;
//함수
function foo(x) {
    return x * 2;
}
var john = [123, true];
var mary = { name: 'kim' };
//모든 obj속성 [key:string] => 글자로 된 모든 object 속성의 타입은 'string'
var sally = { name: 'kim', age: '122' };
//클래스 생성
var Role = /** @class */ (function () {
    function Role(name) {
        this.name = name;
    }
    return Role;
}());
var firstName = "kim";
var age = 50;
var married = true;
var zero = undefined;
var one = null;
var members = ["Kim", "Park"];
var numbers = [1, 2, 3, 4];
var hellObj = { member1: "kim", member2: "park" };
//타입 지정하지 않아도 자동으로 타입 쉴드 씌워짐.
var family = 'park';
var membership = [2, 4, 5];
//문제 좋아하는 곡과 가수이름
var myFavorite = { song: "Teacup", singer: "San-woolim" };
//자료 타입 지정
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true
};
