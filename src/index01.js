// 생성자 함수 -> 이름: 대문자 시작하기 : 사용자규칙
// class -> 이름 : 대문자 시작:  규칙
function Book(type,title){
this.type = type;
this.title = title;
}
//  프로토타입
Book.prototype.action = function(){
  console.log(
    `${this.type} : ${this.title}`
  )
}

// 인스턴스
// const photoshop = new Book('graphic','photo')
// const script = new Book('it','javascript')
// const html = new Book('iy','html5')

// photoshop.action();
// script.action();
// html.action();

const it = [
  new Book('graphic','photo'),
  new Book('it','javascript'),
  new Book('iy','html5')
]
it[0].action();
// for, map(), forEach(), filter()... 기본 push() shift() slice()
// for문
// let num  = it.length;
// for(let i = 0 ; i <= num-1 ; i++){
//   it[i].action();
// }
// for in문 -> index 번호
for(let num in it){
 it[num].action();
}
// for of문 -> item
for(let str of it){
  str.action();
}