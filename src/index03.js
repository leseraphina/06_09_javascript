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
// 40λΆ
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
  new Fruite('apple','red','1000μ'),
  new Fruite('banan','yellow','2000μ'),
  new Fruite('grape','violet','3000μ')
]

for(let i in my){
  my[i].list();
}

