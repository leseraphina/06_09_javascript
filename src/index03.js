// class Fruite{
//   constructor(title,color,price){
//     this.title = title
//     this.color = color
//     this.price = price
//   }
//   list(){
//     document.write(
//       `<p>${this.title} : ${this.color} : ${this.price}</p>`
//     )
//   }
// }
// 40분
const Fruite = class {
  constructor(title,color,price){
    this.title = title
    this.color = color
    this.price = price
  }
  list(){
    document.write(
      `<p>${this.title} : ${this.color} : ${this.price}</p>`
    )
  }
}

const my = [
  new Fruite('apple','red','1000원'),
  new Fruite('banan','yellow','2000원'),
  new Fruite('grape','violet','3000원')
]

for(let i in my){
  my[i].list();
}

