//TODO Object에 타입 지정하려면 interface 이것도 있음
//class 키워드와 비슷
interface Squareda {
  color: string, 
  width: number
};

let nemo :Squareda = { color: 'red', width: 100};

interface Student {
  name :string;
}

//extends로 복사 가능. class끼리 extend 가능하듯이. 
//Sunsang에 Student 속성 복사
interface Sunsang extends Student{
  //name: string
  //Student와 겹치는 중복 속성을 에러로 잡아줌.
  age :number;
}

//type alias도 extends와 비슷한 기능
type Animals = { name :string };
//intersection type(&) : 왼쪽, 오른쪽 만족하는 타입 생성. 교차해주세요! 두 타입을 전부 만족하는 타입
type Cats = { age :number } & Animals;
//& 쓸 때 중복 속성 발생하면 에러가 나지 않으나 사용할 떄 에러 발생
type Cats2 = { name: number } & Animals;
//let yaong :Cats2 = { name: 'kim'}
//never 타입

let student :Student = { name: 'kim', score: 39};
let sunsang :(Cats|Sunsang) = { name: 'kim', age: 20};

//interface는 중복선언 가능
//type은 중복선언 불가능
interface Student {
  score: number;
}
//이 경우 Student는 {name: string, score: number} 속성이 있음. 자동 extend됨

//type Animals : 에러 남

//외부 라이브러리는 interface를 많이 씀. customizing하기 좋음.
//다른 사람이 이용을 많이 할 것 같으면 object 타입 지정할 떄 interface 쓸 것

//숙제1
interface Goods {
  brand: string;
  serialNumber: number;
  model : string[];
}
let sangpum :Goods = { brand: 'Samsung', serialNumber: 1350, model:['TV', 'phone']};

//숙제 2
interface Baguni{
  product: string,
  price: number,
}

let jangbaguni :Baguni[] = [{product: '청소기', price: 4030}, {product: '삼다수', price: 3434}]

//숙제 3
interface Baguni2 extends Baguni {
  card: boolean;
}

//숙제 4
class PersonQ{
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

interface Oho {
  plus : (a: number, b: number) => number;
  minus : (a: number, b: number) => number;
}

let objda :Oho = {
  plus (a, b) {
    return a + b;
  },
  minus (a, b) {
    return a - b;
  }
}
