var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//TODO 함수 rest 파라미터, destructuring할 때 타입 지정
//함수에 몇 개의 인자가 들어올 지 모를 때 rest parameter
function mujehan() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg);
}
//mujehan(1,5,3,6,4,6); 
//arg는 array타입 지정
//[1,5,3,6,4,6]으로 출력
//... 함수 안에서 쓸 경우 rest parameter
//이외 spread 전개 문법
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
//destructuring : 변수 1, 변수 2로 할당 자료들을 변수로 쉽게 빼서 쓸 수 있음
var _a = ['안녕', 100], byunsu1 = _a[0], byunsu2 = _a[1];
var _b = { student3: true, age3: 20 }, student3 = _b.student3, age3 = _b.age3;
var objectda = { student: true, age: 20 };
function gogogo(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
//파라미터 만들기 === 변수 만들기
gogogo({ student: true, age: 20 }); //true 20 출력
//숙제 1 : 숫자 여러개를 입력하면 최댓값을 return 하는 함수
function maxhamsu() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg.reduce(function (acc, cur) {
        if (acc > cur)
            return acc;
        else
            return cur;
    });
}
console.log(maxhamsu(1, 5, 35, 6, 32, 5));
function objprint(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log({ user: user, comment: comment, admin: admin });
}
objprint({ user: 'kim', comment: [1, 3, 4], admin: false });
function arrprint(_a) {
    var number = _a[0], drink = _a[1], boolean = _a[2];
    console.log(number, drink, boolean);
}
arrprint([40, 'wine', false]);
