//TODO class에서 사용 가능한 protected, static 키워드
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var boksaUser = /** @class */ (function () {
    function boksaUser() {
        this.x = 10;
    }
    return boksaUser;
}());
//클래스 복사 붙여쓰기
var NewboksaUser = /** @class */ (function (_super) {
    __extends(NewboksaUser, _super);
    function NewboksaUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewboksaUser;
}(boksaUser));
var saram = new NewboksaUser();
var KUser = /** @class */ (function () {
    function KUser() {
        this.x = 10;
    }
    return KUser;
}());
var NewKUser = /** @class */ (function (_super) {
    __extends(NewKUser, _super);
    function NewKUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //NewKUser에서는 private x 키워드 쓸 수 없음
    //protected x는 쓸 수 있음
    NewKUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewKUser;
}(KUser));
//protected: extends된 class는 사용 가능. 자식들 사용 불가능
//private: extends된 class는 사용 불가능. 자식들 사용 불가능
var XUser = /** @class */ (function () {
    function XUser() {
        this.y = 20;
    }
    XUser.x = 10;
    return XUser;
}());
//static 키워드 붙이면 부모 class에 직접 부여됨(자식에게 물려주지 않음. extends하면 따라옴)
//클래스를 직접 다룰 수 있음
var jasik = new XUser;
console.log(jasik); // {y:20} 만 출력됨
console.log(XUser.x); // 부모 것을 갖다 쓸 수 있다
// private/protected/public + static 가능
// private static
// public static
// 등등
var UserQ = /** @class */ (function () {
    function UserQ() {
        this.skill = 'js';
        this.intro = this.skill + '전문가입니다';
    }
    return UserQ;
}());
var UserX = /** @class */ (function () {
    function UserX() {
        //자식들은 물려받을 수 없음. (자식 콘솔에 skill 나오지 않음) 
        //this 대신 부모이름 앞에
        this.intro = UserX.skill + '전문가입니다';
    }
    UserX.skill = 'js';
    return UserX;
}());
var chulso = new UserX;
console.log(chulso);
//직접 변경. 이 이후로 생성되는 자식들은 ts 전문가
//밖에서 변경하는 것은 위험할 수 있음.
UserX.skill = 'ts';
var chulso2 = new UserX;
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
var Kokopada = /** @class */ (function () {
    function Kokopada() {
        this.z = 30;
    }
    Kokopada.x = 10;
    Kokopada.y = 20;
    return Kokopada;
}());
var heaven = new Kokopada;
console.log(heaven); // z 만 출력됨
console.log(Kokopada.y); // y 출력 (부모가 직접 쓸 수 있음)
var Kokopop = /** @class */ (function (_super) {
    __extends(Kokopop, _super);
    function Kokopop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kokopop;
}(Kokopada));
var hell = new Kokopop;
console.log(hell); // z만 출력됨
//숙제2
var Ohora = /** @class */ (function () {
    function Ohora() {
    }
    Ohora.addOne = function (number) {
        Ohora.x += number;
    };
    Ohora.printX = function () {
        console.log(Ohora.x);
    };
    Ohora.x = 11;
    Ohora.y = 20;
    return Ohora;
}());
Ohora.addOne(3);
Ohora.addOne(4);
Ohora.printX();
//숙제 3
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative;\n    top: ".concat(a * 400, "px;\n    left: ").concat(a * 400, "px;\n    width: ").concat(this.width, "px;\n    height: ").concat(this.height, "px;\n    background: ").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var nemosponge = new Square(30, 30, 'red');
nemosponge.draw();
nemosponge.draw();
nemosponge.draw();
nemosponge.draw();
