// const {a:a,b:b,c:c,d:d} = {
//   a : '데이터1',
//   b : '데이터2',
//   c : '데이터3',
//   d : '데이터4',
// }
const {a,b,c,d,e='level'} = {
  a : '데이터1',
  b : '데이터2',
  c : '데이터3',
  d : '데이터4'
}

console.log(a)
console.log(e)


//  1. 키의 값의 변경
const num = d;
console.log(num)

//  2. 속성을 만들어서 사용

const grphic = {
  name:'paint',
  title:'painter',
  price: '20,000'
}

const {name:subtitle,title} = grphic
console.log(subtitle);

// 1. 설계 만들기
// 2. 정리, 이해