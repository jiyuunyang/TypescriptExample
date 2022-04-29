//TODO: 타입을 파라미터로 입력하는 Generic
function hansu(x) {
    return x[0];
}
var a = hansu([4, 2]);
var b = hansu(['4', '2']);
console.log(a, b);
//타입 파라미터 제한두기: MyType이 우측에 있는 속성을 가지고 있는지 extends -> narrowing과 비슷함
function ppaegi(x) {
    return x - 1;
}
var c = ppaegi(100);
function gogogoyam(x) {
    return x.length;
}
var d = gogogoyam(['100']);
//함수에 파라미터 넣을 수 있음
//extends키워드로 넣을 수 있는 타입 제한 가능(검사. narrowing.)
//class에도 타입 파라미터 넣을 수 있음
//숙제1
function day20sukje1(x) {
    return x.length;
}
var e = day20sukje1('hello');
var f = day20sukje1(['kim', 'park']);
console.log(e, f);
var datajson = '{"name":"dog", "age":1}';
function day20sukje2(x) {
    return JSON.parse(x);
}
var g = day20sukje2(datajson);
console.log(g);
//숙제3
var Personid = /** @class */ (function () {
    function Personid(poooo) {
        this.name = poooo;
    }
    return Personid;
}());
var poooo = new Personid('어쩌구');
poooo.name;
var piku = new Personid(12);
piku.name;
var kopu = new Personid(['ho']);
kopu.name;
