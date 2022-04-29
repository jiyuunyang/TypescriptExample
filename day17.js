//TODO public, private 쓰는 거 보니까 타입스크립트 귀여운 편
//객체 지향 언어 같은 문법도 제공. public, private, protected, static 등의 키워드
var User = /** @class */ (function () {
    function User(any) {
        this.name = 'kim';
        this.name = any;
    }
    return User;
}());
//constructor는 파라미터를 지정 가능
//public 붙으면 모든 자식들이 이용 가능. 인스턴스에 속성을 부여하고 싶을 때 씀. 생략 가능.
var user1 = new User('park');
user1.name = '안녕';
var pUser = /** @class */ (function () {
    function pUser(any) {
        this.name = 'kim';
        this.name = any;
    }
    return pUser;
}());
var user2 = new pUser('park');
//user2.name
//class에서 쓰는 private 키워드는 class 안에서만 수정, 이용 가능
var Family = /** @class */ (function () {
    function Family(any) {
        this.familyName = 'Kim';
        this.name = any + this.familyName;
    }
    Family.prototype.changeName = function () {
        this.familyName = 'Park';
    };
    return Family;
}());
var user3 = new Family('Minsu');
//user3.familyName = 'Park';
//private 필드 값은 함부로 수정할 수 없음
user3.changeName(); //밖에서 수정하고 싶을 경우에는 바꾸는 함수를 class 내에서 선언.
console.log(user3);
//public키워드 쓰면 this.어쩌구 생략 가능
//축약어 제공
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var child = new Person('kim');
console.log(child);
