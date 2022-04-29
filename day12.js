//TODO class만들 때 타입 지정 가능
var PersonW = /** @class */ (function () {
    function PersonW() {
        //필드값 data
        this.data = 0;
    }
    return PersonW;
}());
var person1 = new PersonW();
var person2 = new PersonW();
var PersonX = /** @class */ (function () {
    //필드값 name 미리 지정해야 constructor 에러 this.name 이 없는 것이라는 안뜸.
    function PersonX(a) {
        this.name = a;
    }
    //프로토타입 함수 집어넣는 자리
    PersonX.prototype.helloto = function (a) {
        console.log('안녕' + a);
    };
    return PersonX;
}());
//복제되는 게 항상 object인데 return 타입 지정할 필요는 없음
//함수 관련 문법들 다 적용됨.
var person3 = new PersonX('kim');
var person4 = new PersonX('park');
person3.helloto('똥개');
var PersonZ = /** @class */ (function () {
    //기본 파라미터 'kim'
    function PersonZ(a) {
        if (a === void 0) { a = 'kim'; }
        this.name = a;
        this.age = 20;
    }
    return PersonZ;
}());
var Sonata = /** @class */ (function () {
    function Sonata(x, y) {
        this.model = x;
        this.price = y;
    }
    Sonata.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Sonata;
}());
var car1 = new Sonata('소나타', 3000);
console.log(car1);
console.log(car1.tax());
//보고 베꼈다..
//...args는 제대로 찾았음.
//https://typescript-kr.github.io/pages/functions.html 참조할 것
//this.num, this.str에 바로 push 할 수 없음.
//constructor안에 따로 배열 변수 선언하고 필드에(this.속성에) 배열을 할당하는 것이 나음
var Word = /** @class */ (function () {
    function Word() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        args.forEach(function (el) {
            if (typeof el === 'number') {
                numbers.push(el);
            }
            else {
                strings.push(el);
            }
        });
        this.num = numbers;
        this.str = strings;
    }
    return Word;
}());
var obj2 = new Word('kim', 3, 5, 'park');
console.log(obj2.num);
console.log(obj2.str);
