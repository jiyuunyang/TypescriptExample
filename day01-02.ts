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
let 이름 :string = 'kim'; //타입 엄격 관리
let 배열 :string[] = ['kim', 'park']; //배열의 타입 관리
let 객체 :{ name? : string } = {name : 'kim'} //name 속성은 옵션(?)
let 내이름 : string | number = 'kim' //union type
내이름 = 123;

//타입지정 변수
type Name = string | number ;
let 내타입 :Name = 123;

//함수
function foo(x :number) :number {
  return x * 2
}
//number가 들어오고 number가 리턴됨
// foo('123')//에러 생김

type Member = [number, boolean]; //tuple 타입. 무조건 첫째는 number, 둘째는 boolean
let john: Member = [123, true]

type December = {
  name: string
}

let mary: December = {name: 'kim'};

type November = {
  [key :string] : string, 
}
//모든 obj속성 [key:string] => 글자로 된 모든 object 속성의 타입은 'string'
let sally: November = { name: 'kim', age: '122'}

//클래스 생성
class Role {
  name :string;
  constructor(name :string){
    this.name = name;
  }
}

const firstName :string = "kim";
let age :number = 50;
let married :boolean = true;
let zero :undefined = undefined;
let one :null = null;
const members :string[] = ["Kim", "Park"];
const numbers :number[] = [1, 2, 3, 4];
const hellObj :{member1: string, member2: string} = {member1: "kim", member2: "park"};
//타입 지정하지 않아도 자동으로 타입 쉴드 씌워짐.
let family = 'park';
let membership = [2,4,5]
//문제 좋아하는 곡과 가수이름
const myFavorite:{song: string, singer:string} = {song:"Teacup", singer: "San-woolim"};
//자료 타입 지정
let project : {
  member: string[], 
  days: number, 
  started: boolean
} = {
  member : ["kim", "park"],
  days: 30,
  started: true
}