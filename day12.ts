//TODO class만들 때 타입 지정 가능
class PersonW {
  //필드값 data
  data = 0;
}

let person1 = new PersonW();
let person2 = new PersonW();

class PersonX{
  name :string;
  //필드값 name 미리 지정해야 constructor 에러 this.name 이 없는 것이라는 안뜸.
  constructor(a :string){
    this.name=a;
  }
  //프로토타입 함수 집어넣는 자리
  helloto(a :string) {
    console.log('안녕' + a)
  }
}
//복제되는 게 항상 object인데 return 타입 지정할 필요는 없음
//함수 관련 문법들 다 적용됨.

let person3 = new PersonX('kim');
let person4 = new PersonX('park')

person3.helloto('똥개');

class PersonZ {
  name;
  age;
  //기본 파라미터 'kim'
  constructor(a = 'kim') {
    this.name = a;
    this.age = 20;
  }
}

class Sonata {
  model :string;
  price :number;
  constructor(x :string, y:number){
    this.model = x
    this.price = y
  }
  tax () :number {
    return this.price * 0.1;
  }
}

let car1 = new Sonata('소나타', 3000)

console.log(car1);
console.log(car1.tax());


//보고 베꼈다..
//...args는 제대로 찾았음.
//https://typescript-kr.github.io/pages/functions.html 참조할 것
//this.num, this.str에 바로 push 할 수 없음.
//constructor안에 따로 배열 변수 선언하고 필드에(this.속성에) 배열을 할당하는 것이 나음
class Word {
  num;
  str;
  constructor(...args:(number|string)[]) {
    let numbers :number[] = [];
    let strings :string[] = [];
    args.forEach((el)=> {
      if( typeof el === 'number') {
        numbers.push(el);
      } else {
        strings.push(el);
      }
    })
    this.num = numbers;
    this.str = strings;
  }
}

let obj2 = new Word('kim', 3, 5, 'park');
console.log(obj2.num);
console.log(obj2.str);