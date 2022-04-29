//TODO 타입 확정하기 Narrowing & Assertion
//아직 하나로 확정되지 않은 애매한 타입을 다룰 때  Type Narrowing 써야함(if문 등)
function myfunc(x:number|string) {
  if (typeof x === 'string') {
    return x + '1'
  } else {  
    return x + 1
  }
}
//else 문 꼭 써야 안전함.
function numbfunc(x: number|string) {
  let array :number[] = [];
  if (typeof x === 'number') {
    array[0] = x;
  } else {

  }
}

// Narrowing 문법들
// typeof 변수
// 속성명 in 오브젝트 자료
// 인스턴스 instanceof 부모

// assertion 문법 : 타입 덮어 쓰기
function asserfunc (x :number|string) {
  let array :number[] = [];
  array[0] = x as number;
}
//as 문법은 
//1. Narrowing 할때 씀. 타입을 a에서 b로 변경하는 것은 아님.
//2. 무슨 타입이 들어올지 100% 확실할 때 씀. 그래서 굳이 쓰지 않고 if문으로 narrowing을 함. 평소에는 쓰지 말 것. 비상용임.

//옛날 as 문법
//let hname :string = 'kim';
//<number>hname

//숙제 1
function cleaning (x: (number|string)[]) {
  let result :number[] = []; 
  x.forEach((el) => {
    if (typeof el === 'string') {
      result.push(Number(el));
    } else {
      result.push(el);
    }
  });
  return result;
}

//숙제 2
function subject (x: {subject: string|string[]}) {
  if (typeof x.subject === 'string') {
    return x.subject;
  } else {
    let len: number = x.subject.length;    
    return x.subject[len - 1];
  }
}

