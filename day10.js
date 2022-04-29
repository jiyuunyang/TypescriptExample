//TODO class 키워드 알아보기

var nunu = {
  q: 'consume',
  w: 'snowball'
}

var garen = {
  q: 'strike',
  w: 'courage'
}

//비슷한 object 만들 일 있으면 class 만들어 쓰기

//constructore
//this는 machine으로부터 생성되는 오브젝트들(instance)
//부모
function machine(q, w) {
  this.q = q;
  this.w = w;
}

//상속기능
//자식
var nunu = new machine('consume', 'snowball');
var garen = new machine('strike', 'courage');


//ES6 문법
class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}