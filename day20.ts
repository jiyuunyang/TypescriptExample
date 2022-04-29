//TODO: 타입을 파라미터로 입력하는 Generic

function hansu<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = hansu<number>([4, 2]);
let b = hansu<string>(['4', '2']);
console.log(a, b);

//타입 파라미터 제한두기: MyType이 우측에 있는 속성을 가지고 있는지 extends -> narrowing과 비슷함
function ppaegi<MyType extends number>(x: MyType) {
  return x - 1;
}

interface LengthCheck {
  length: number;
}
let c = ppaegi<number>(100);

function gogogoyam<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let d = gogogoyam<string[]>(['100']);

//함수에 파라미터 넣을 수 있음
//extends키워드로 넣을 수 있는 타입 제한 가능(검사. narrowing.)
//class에도 타입 파라미터 넣을 수 있음

//숙제1
function day20sukje1<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let e = day20sukje1<string>('hello');
let f = day20sukje1<string[]>(['kim', 'park']);

console.log(e, f);

//숙제2
interface Animas {
  name: string;
  age: number;
}

let datajson = '{"name":"dog", "age":1}';

function day20sukje2<MyType>(x: string): MyType {
  return JSON.parse(x);
}

let g = day20sukje2<Animas>(datajson);
console.log(g);

//숙제3
class Personid<Type> {
  name;
  constructor(poooo: Type) {
    this.name = poooo;
  }
}

let poooo = new Personid<string>('어쩌구');
poooo.name;
let piku = new Personid<number>(12);
piku.name;
let kopu = new Personid<string[]>(['ho']);
kopu.name;
