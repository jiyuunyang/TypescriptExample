//TODO Narrowing할 수 있는 방법 더 알아보기
//typeof로 narrowing 못할 때
function gogod(a: string | undefined) {
  if ( a && typeof a === 'string') {
    //undefined인 경우 이 조건식 실행 안됨. 
  }
}

type Fish = {swim: string};
type Bird = {fly: string};
function koroko (animal: Fish | Bird) {
  //속성명 in 오브젝트 자료 : 
  if ('swim' in animal) {
    //Fish 타입인지 검사
    animal.swim
  } 
}
//in 키워드로 object narrowing 가능. 속성명 in 오브젝트 자료(배타적인 속성을 찾아서 구분)

//instanceof 연산자로 object narrowing 가능
//object instanceof 부모 class

let nalza = new Date();
if (nalza instanceof Date) {
  //어쩌구 가능
}

type Car = {
  //unique한 리터럴타입 '4개' '2개' 등
  wheel: '4개',
  color: string
}
type Bike = {
  wheel: '2개',
  color: string
}

//둘 다 똑같은 오브젝트 자료. instanceof도 못 쓰면?
//literal type으로 구분
function dododo(x: Car | Bike) {
  if(x.wheel === '4개') {
    //이 경우 x는 Car 타입임.
    console.log('x는 Car 타입이에요');
  }
}

//논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정해줌