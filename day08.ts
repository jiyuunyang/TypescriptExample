//TODO 함수와 methods에 type alias 지정하는 법
type Hotype = (a :string) => number;

const ho :Hotype = function () {
  return 10
};

let memberInfo :memberInfo = {
  name: 'kim',
  age: 30,
  plusOne (x : number){
    return x + 1
  },
  changeName : () => {}
}

type memberInfo = {
  name: string,
  age: number,
  plusOne: (x : number) => number,
  changeName: () => void
}


function foo1 (){
}
function foo2 (){

}
//foo2는 콜백함수. foo1이 실행된 후 foo2가 실행
//foo1(foo2)

type CutType = (char :string) => string

let cutZero :CutType = function (char) {
  if (char[0] === '0') {
    return char.slice(1);
  } else {
    return char;
  } 
}

let cutZero2 :CutType = function (char) {
  let result = char.replace(/^0+/, "");
  return result;
}

type RemoveDashType = (str :string) => number

const removeDash :RemoveDashType = function (str) {
  let result = str.split('-').join('');
  return Number(result);
}

const removeDash2 :RemoveDashType = function (str) {
  let result = str.replace(/-/g, "");
  return Number(result);
}

type PipeType = (string:string, callback1: CutType, callback2: RemoveDashType) => void

const pipe :PipeType = function (string, callback1, callback2) {
  let result1 = callback1(string);
  let result2 = callback2(result1);
  console.log(result2);
}

pipe('010-1111-2222', cutZero, removeDash);