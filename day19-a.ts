//TODO 타입도 import해서 씁니다 그리고 namespace

export var nameida = 'kim';
export var ageda = 20;

export type Nameida = string;

//옛날 문법 : module도 namespace와 같은 소리
//중요한 타입정의들을 다른 파일들에서 쓰고 싶으면 안전하게 namespae 안에 써서 export해줌
//<reference/>태그를 이용해 다른 파일을 import해서 그 파일에 있는 namespace 사용 가능
namespace Wow {
  export type HelloName = string | boolean;
}
//namespace 사용 예시
//let byunsuimda = Wow.HelloName = 'kim';

export interface Interesting {};

export type Car = {
  wheel: number,
  model: string
}

export interface Bike {
  wheel: 2,
  model: string
}

export type ManyUseFoo = (a? :object) => void;

