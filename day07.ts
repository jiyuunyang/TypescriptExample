//TODO Literal Types로 만드는 const 변수 유사품
let koko:string;
let sung:'kim';
//sung 변수에는 무조건 'kim'이라는 문자만 들어올 수 있음 --> literal types
let no:123;
no = 123;

let itsme:'Bald' | 'Solo';
itsme = 'Bald';
itsme = 'Solo';
//엄격하게 방지. 자동완성 가능.

function kuku(a :'hello') :1 | 0{
  return 0;
  //'hello' 인자만 넣을 수 있음
  //1또는 0만 리턴 가능
}
kuku('hello');

type play = '가위' | '바위' | '보'

function game(x : play) :play[] {
  return ['가위'];
}

//literal type은 const 변수의 업그레이드 버전

var data = {
  name: 'kim'
} as const
//as const : 이 object는 literal type 지정을 알아서 해주기
//효과1 : object value 값을 그대로 타입으로 지정해줌
//효과2 : object 속성들에 모두 readonly 붙여줌
//변경할 수 없게, 리터럴 타입도 지정하고 싶을 때 as const 쓸 것 : Object 자료를 완전히 잠가 놓을 수 있음

data.name;
//data.name=123;
//읽기전용 속성으로 에러 남

function myFoo(a : 'kim') {
//'kim'이라는 타입만 들어올 수 있음. 'kim'이라는 자료가 들어오는 것이 아님.
}


myFoo(data.name)
//kim은 string임
//solution1 : object 만들 떄 타입 지정을 확실히 하기
//solution2 : as 문법으로 타입 거짓말하기
//solution3 : as const 키워드
