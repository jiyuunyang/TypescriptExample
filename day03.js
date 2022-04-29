//TODO 타입을 미리 정하기 애매할 때(union type, any, unknwon)
//union type
var member = 123;
member = 'hello';
var memberArr = [1, '2', 3];
var obj = { a: 123 };
//any는 type 실드 해제 문법
var hello;
hello = 123;
hello = [];
hello = '123';
//any와 비슷함 unknown은 유연한 변수. type 실드는 작동됨. unknown이 더 안정적인 타입
var bye;
//수학 연산도 타입이 맞아야함.
//bye - 1 //에러 발생
//타입끼리의 연산만 적용됨.
var foot;
//foot + 1; //유니온타입은 새로운 타입이므로 연산시 에러 발생
var hand = 1;
//hand - 1; //hand는 숫자타입이 아니므로(unknown타입이므로) 에러 발생
//Narrowing/Assertion 배워서 엄격하게 코드를 짜면 됨
var user = 'kim';
var kage = undefined;
var kmarried = false;
var chulsu = [user, kage, kmarried];
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
