//TODO array 자료에 붙일 수 있는 tuple type
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mungmung = ['dog', true];
//tuple type : 첫 자료는 무조건 string, 둘째 자료는 무조건  boolean(위치까지 고려한 타입지정 가능)
//물음표는option 맨 뒤에만 칠 수 있음. 항상 뒤에서부터 시작.
var mungmung2 = ['dog', false];
//몇 개가 들어올 지 모르는 인자들
function hansudan() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
hansudan(111, '234');
function hanmsudng(a, b) {
    console.log([a, b]);
}
var arrada = [1, 2, 3];
//array들어오는데 몇 개 들어오는 지는 몰라요
var arrada2 = __spreadArray([4, 5], arrada, true);
//숙제1
var latestfood = ['동서녹차', 4000, true];
//숙제2
var sukje2arr = ['동서녹차', 4000, true, false, true, true, false, true];
//숙제3
function sukje3puli() {
    var z = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        z[_i] = arguments[_i];
    }
    console.log(z);
}
sukje3puli('hell', true, 1, 2, '3', 1);
//숙제4
//인자를 forEach로 돌려서 확인할 것
function sukje4puli() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === 'string') {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result;
}
