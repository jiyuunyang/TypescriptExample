//TODO 함수에 타입 지정하는 법 & void 타입
//함수에 타입 지정
function twice(x) {
    return x * 2;
}
//return 할 게 없는 경우
//void는 리턴 쓰기 싫은 함수에서 씀
function noturn(x) {
    //return 1+1;
}
//noturn(); //에러
//파라미터 지정했을 때 함수 호출시 파라미터 넣는 것이 필수
//파라미터가 옵션일경우 파라미터변수? : 타입
function option(x) {
}
;
// ?옵션 : undefined가 포함된 유니온타입을 만드는 것과 같음(아래 option과 option2는 같음)
function optino2(x) {
}
;
option();
//유니온 타입은 연산을 실행하지 않음
var x;
//x + 3 //에러
function print1(x) {
    if (x)
        console.log('안녕하세요 ' + x);
    else
        console.log('이름이 없습니다');
}
function print2(x) {
    return String(x).length;
}
function print3(earn, house, charm) {
    var point = earn;
    if (house)
        point + 500;
    if (charm === '상')
        point + 100;
    if (point >= 600)
        return '결혼가능';
}
//다음 시간엔 narrowing을 배움
