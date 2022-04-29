//TODO 타입도 변수에 담아 쓰세요 type 키워드 써서 & readonly
//type alias(타입 별칭/변수) 만드는 법
//type 변수 작명 습관은 영어 대문자가 국룰. 일반 변수와 다르게 관리하기 위함.
type Animal = string | number | undefined; //유니언 타입
let animal :Animal;

type Character = {name: string, age: number}
let character: Character = {name: 'kim', age: 20}

const born = {region: 'seoul'};
//const로 담은 object 수정은 자유롭게 가능함 (자바스크립트)
//typescript에서는 이를 박을 수 있음
type Girlfriend = {
  readonly name: string
}
//readonly는 수정을 불가능함. 수정시 에러가 나옴.
const girlfriend: Girlfriend = {
  name: 'Amber'
}
//girlfriend.name = 'Yura';
//타입스크립트 에러는 에디터와 터미널에서만 존재함. 실제 변환된 js 파일은 에러가 없음.

type Boyfriend = {
  name? :string
  //또는 name : string | undefined
}
//name속성은 들어와도 되고 안들어와도 됨

type Nickname = string;
type Age = number;
type Nickperson = Name | Age; // type 변수도 unionntype으로 합치기 가능. 
//type Nicperson: stirng | number;

type PositionX = { x: number };
//같은 이름의 type 변수는 재정의가 불가능함.
type PositionY = { y: number };
type NewType = PositionX & PositionY;
// {x: number, y: number};
// & 연산자로 object 타입 extend하기
let position :NewType = {x : 10, y : 20};


type Korean = {x :number, y :string};
type Japanese = {y :number, z :string};
type KoJapan = Korean & Japanese;
//let kojapan :KoJapan = {x: 1, y: 2, z :'4'};
//중복 속성이 다를 경우(Korean에서는 y: string이지만 Japnese에서 y: number일 경우) never 형식으로 뜬다.

type Homework1 = {color? :string, size :number, readonly position :number[]};
let homework1 :Homework1;

type Info = {name :string, phone :number, email :string};
let homework2 :Info;

type Minor = {minor:boolean};
type MoreInfo = Info & Minor;
let homework3 :MoreInfo;