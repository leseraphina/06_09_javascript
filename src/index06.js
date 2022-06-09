// const num = {
//   a1 : 10,
//   a2 : 20,
//   a3:  30,
//   a4 : 40
// }
const {a1,a2,a3,a4} = {
  a1 : 10,
  a2 : 20,
  a3:  30,
  a4 : 40
}
// console.log(num.a1)
console.log(a1)

const book = {
  type : 'it',
  title: 'html',
  price : '20,000'
  // ,level: 10
}
const {type,title,price,level=0} = book;
console.log(type)
console.log(level)