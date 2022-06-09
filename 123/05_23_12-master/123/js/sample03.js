const {a1,a2,a3} ={
  a1:10,
  a2:20,
  a3:30,
  a4:40
}

console.log(a1);

const book = {
  type:'it',
  title:'html',
  price:'20,000',
  'title name': 'yes',
  // level: 'main'
}
//   이해 -> 사용
//  기본형
const {type,title,price,level=0} =book
console.log(type);
console.log(level)

//  1. 키의 값의 변경
 const welcome = type;
 console.log(welcome)

//  2. 속성 만들어서 변경
const graphic = {
  some:'paint',
  bookname : 'painter',
  etc: '20,000'
}
const {some:sumtitle,bookname} = graphic
console.log(sumtitle);

