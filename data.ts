//var kookoo = 10;
//ts이상한 특징 : 모든 ts 파일은 ambient module(글로벌 모듈)
//import / export 키워드 없을 시에 글로벌모듈

//로컬모듈 : import 또는 export 키워드가 적어도 하나도 있으면
//그 파일은 로컬모듈이 되고, 거기에 있는 모든 면수는 export 해줘야 다른 파일에서 사용 가능.
//타입스크립트가 다른 파일에 영향끼치는 것을 막고 싶으면 export 키워드 강제로 추가하면 됨.
export {};
let a = 10;
//로컬 모듈을 쓰다가 global 모듈을 가져다 쓰고 싶을 때
declare global {
  type Doggog = string;
}
