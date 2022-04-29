//TODO prototype 문법 알아보기
//부모자식 상속 관계

function machine () {
  this.q = 'strike';
  this.w = 'snowball';
}

//prototype은 유전자
//부모만 가지고 있으나 자식이 끌어다 씀.
machine.prototype.name = 'kim';

var nunu = new machine()

//nunu.name이라고 쓰면 'kim'이 출력됨
//nunu가 name을 가지고 있지 않으면 nunu 부모 유전자를 뒤짐
//없으면 부모의 부모의 유전자까지... prototype chain

var array = [4,2,3];
//컴퓨터 입장에서 array생성
var array = new Array(4, 2, 3)
var obj = new Object();

//array에 붙일 수 있는 기본 함수들
array.sort();
//기본 함수들이 부모 유전자에 기록되어 있으므로 사용할 수 있음. prototype.
//array.prototype을 검색하면 부모의 함수들을 확인할 수 있음.

//모든 array자료에서 쓸 수 있는 함수 추가 가능할까?
Array.prototype.myFunc = function (){};
//가능하다! 유전자를 수정하면 됩니다!