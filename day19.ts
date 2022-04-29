//TODO 타입도 import해서 씁니다 그리고 namespace

import { nameida, ageda, Nameida, Car, Bike, ManyUseFoo} from "./day19-a";

let byunsuda:Name = 'park';

//옛날 코드 방식 import export 
///<refernce path="./a.ts">

let myCar:Car = {wheel: 4, model: 'sonata'};
let myBike:Bike = {wheel: 2, model: 'holly'};

let Foooo:ManyUseFoo = () => {};


namespace Dog1 {
  export type Dog = string;
}

namespace Dog2 {
  export interface Dog {
    name: string
  };
}


let dog1: Dog1.Dog = 'bark';
let dog2: Dog2.Dog = {name: 'paw'};
