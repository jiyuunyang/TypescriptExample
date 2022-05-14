//TODO array 자료에 붙일 수 있는 tuple type

let mungmung: (string | boolean)[] = ['dog', true];
//tuple type : 첫 자료는 무조건 string, 둘째 자료는 무조건  boolean(위치까지 고려한 타입지정 가능)
//물음표는option 맨 뒤에만 칠 수 있음. 항상 뒤에서부터 시작.
let mungmung2: [string, boolean?, number?] = ['dog', false];

//몇 개가 들어올 지 모르는 인자들
function hansudan(...x: [number, string]) {
  console.log(x);
}

hansudan(111, '234');

function hanmsudng(a: number, b: string) {
  console.log([a, b]);
}

let arrada = [1, 2, 3];
//array들어오는데 몇 개 들어오는 지는 몰라요
let arrada2: [number, number, ...number[]] = [4, 5, ...arrada];

//숙제1
let latestfood: [string, number, boolean] = ['동서녹차', 4000, true];

//숙제2
let sukje2arr: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

//숙제3
function sukje3puli(...z: [string, boolean, ...(number | string)[]]) {
  console.log(z);
}

sukje3puli('hell', true, 1, 2, '3', 1);

//숙제4
//인자를 forEach로 돌려서 확인할 것
function sukje4puli(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === 'string') {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });
  return result;
}
