//TODO 함수에 사용하는 never타입도 있긴 합니다
function neverend1() {
    //절대 return 값이 있으면 안됨.
    //endpoint가 없어야함(실행이 절대 끝나지 않음)
    throw new Error();
    //코드 실행 중단됨
}
function neverend2() {
    while (true) {
        //endpoint가 없는 함수
    }
}
//대체로 never 타입은 void로 대체 가능함(리턴하지 않음)
//코드 이상하게 짜면 never 타입 등장함
function foooo(parameter) {
    if (typeof parameter === 'string') {
        console.log(parameter);
    }
    else {
        //console.log(parameter);
        //이 경우 never임
    }
}
var totoroko = function () {
    throw new Error();
};
//함수 선언문(void)
function whatyouwant() {
    throw new Error();
}
//함수 표현식(never)
var whatyouwant2 = function () {
    throw new Error();
};
