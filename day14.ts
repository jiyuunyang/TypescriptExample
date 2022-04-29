//TODO 함수 rest 파라미터, destructuring할 때 타입 지정
//함수에 몇 개의 인자가 들어올 지 모를 때 rest parameter
function mujehan(...arg :(number|string|boolean)[]) {
  console.log(arg)
}

//mujehan(1,5,3,6,4,6); 
//arg는 array타입 지정
//[1,5,3,6,4,6]으로 출력

//... 함수 안에서 쓸 경우 rest parameter

//이외 spread 전개 문법
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

//destructuring : 변수 1, 변수 2로 할당 자료들을 변수로 쉽게 빼서 쓸 수 있음
let [byunsu1, byunsu2] = ['안녕', 100];
let {student3, age3}:{student3:boolean, age3:number} = { student3: true, age3: 20 };
let objectda = {student: true, age: 20};

function gogogo ({student, age}:{student:boolean, age: number}) {
  console.log(student, age);
}
//파라미터 만들기 === 변수 만들기
gogogo({student: true, age: 20}); //true 20 출력

//숙제 1 : 숫자 여러개를 입력하면 최댓값을 return 하는 함수

function maxhamsu(...arg:number[]) {
  return arg.reduce((acc,cur) => {
    if(acc > cur) return acc;
    else return cur;
  })
}

console.log(maxhamsu(1,5,35,6,32,5));

//숙제2 
interface ObjT{
  user: string;
  comment: number[];
  admin: boolean;
}
function objprint ({user, comment, admin} :ObjT) :void{
  console.log({user, comment, admin});
}

objprint({user: 'kim', comment: [1,3,4], admin: false});

//숙제3 
type ArrTp = (number|string|boolean)[]
function arrprint ([number, drink, boolean]:ArrTp) :void{
  console.log(number, drink, boolean);
}

arrprint([40, 'wine', false]);