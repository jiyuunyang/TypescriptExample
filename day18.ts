//TODO class에서 사용 가능한 protected, static 키워드

class boksaUser {
  x = 10;
}

//클래스 복사 붙여쓰기
class NewboksaUser extends boksaUser {

}

let saram = new NewboksaUser();

class KUser {
  protected x = 10;
}

class NewKUser extends KUser {
  //NewKUser에서는 private x 키워드 쓸 수 없음
  //protected x는 쓸 수 있음
  doThis() {
    this.x = 20;
  }
}

//protected: extends된 class는 사용 가능. 자식들 사용 불가능
//private: extends된 class는 사용 불가능. 자식들 사용 불가능

class XUser {
  static x = 10;
  y = 20;
}
//static 키워드 붙이면 부모 class에 직접 부여됨(자식에게 물려주지 않음. extends하면 따라옴)
//클래스를 직접 다룰 수 있음
let jasik = new XUser;
console.log(jasik); // {y:20} 만 출력됨
console.log(XUser.x) // 부모 것을 갖다 쓸 수 있다

// private/protected/public + static 가능
// private static
// public static
// 등등

class UserQ {
  skill = 'js';
  intro = this.skill + '전문가입니다'
}

class UserX {
  static skill = 'js';
  //자식들은 물려받을 수 없음. (자식 콘솔에 skill 나오지 않음) 
  //this 대신 부모이름 앞에
  intro = UserX.skill + '전문가입니다'
}

let chulso = new UserX;
console.log(chulso);

//직접 변경. 이 이후로 생성되는 자식들은 ts 전문가
//밖에서 변경하는 것은 위험할 수 있음.
UserX.skill = 'ts';

let chulso2 = new UserX;
console.log(chulso2);


//숙제 1
// private static : User 클래스에서 extends된 class는 사용 불가능. 자식들 사용 불가능 부모 class에 직접 부여됨.
// public static : User 클래스에서 extends된 class 사용 가능. 자식들 사용 불가능. 물려받지 않음. 부모 class에 직접 부여됨.
// protected : User 클래스에서 extends된 class는 사용 가능. 자식들 사용 불가능

// 해설
// 필드값은 원래 모든 User의 자식들에게 물려주는 속성이지만
// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있다.
// User의 자식들은 x와 y를 쓸 수 없다
// private static x는 내부에서만 수정 가능
// public static y는 class 내부 외부 상관 없이 수정 가능. public 키워드를 지워도 똑같이 작동함.
// protected z는 private 키워드와 유사하게 class 내부에서만 사용 가능.
// extends로 복사한 class 내부에서도 사용 가능 (private은 불가능)

class Kokopada {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

let heaven = new Kokopada;
console.log(heaven);// z 만 출력됨

console.log(Kokopada.y) // y 출력 (부모가 직접 쓸 수 있음)

class Kokopop extends Kokopada {

}
let hell = new Kokopop;
console.log(hell); // z만 출력됨

//숙제2
class Ohora {
  private static x :number = 11;
  public static y :number = 20;
  static addOne (number: number) {
    Ohora.x += number;
  }
  static printX() {
    console.log(Ohora.x);
  }
}

Ohora.addOne(3);
Ohora.addOne(4);
Ohora.printX();

//숙제 3

class Square {
  constructor( public width:number, public height:number, public color:string) {
  }
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative;
    top: ${a * 400}px;
    left: ${a * 400}px;
    width: ${this.width}px;
    height: ${this.height}px;
    background: ${this.color}"></div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let nemosponge = new Square(30, 30, 'red');

nemosponge.draw();
nemosponge.draw();
nemosponge.draw();
nemosponge.draw();
