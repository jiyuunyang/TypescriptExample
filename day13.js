;
var nemo = { color: 'red', width: 100 };
//let yaong :Cats2 = { name: 'kim'}
//never 타입
var student = { name: 'kim', score: 39 };
var sunsang = { name: 'kim', age: 20 };
var sangpum = { brand: 'Samsung', serialNumber: 1350, model: ['TV', 'phone'] };
var jangbaguni = [{ product: '청소기', price: 4030 }, { product: '삼다수', price: 3434 }];
//숙제 4
var PersonQ = /** @class */ (function () {
    //필드값 name 미리 지정해야 constructor 에러 this.name 이 없는 것이라는 안뜸.
    function PersonQ(a) {
        this.name = a;
    }
    //프로토타입 함수 집어넣는 자리
    PersonQ.prototype.helloto = function (a) {
        console.log('안녕' + a);
    };
    return PersonQ;
}());
var objda = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
