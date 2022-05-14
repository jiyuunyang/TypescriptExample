//TODO 외부파일 이용시 declare & 이상한 특징인 ambient module
declare let a22: number;
console.log(a22 + 1);

//ts끼리는 import export 없어도 가져다 쓸 수 있음(글로벌 모듈)
//console.log(kookoo + 12);
//에러
//let kookoo = 123

let dogog: Doggog = 'kim';

//TS 에러 : jQuery $ 모름(다음 강의에서 확인)
