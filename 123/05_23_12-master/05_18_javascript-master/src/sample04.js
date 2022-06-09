class Fruite {
  constructor(title,color,price){
    this.title = title;
    this.color = color;
    this.price = price;
  }
  list(){
    document.write(
      `<p>${this.title} : ${this.color} : ${this.price}</p>`
    )
  }
}

const my = [
  new Fruite('apple','red','1000원'),
  new Fruite('banana','yellow','2000원'),
  new Fruite('grape','violet','3000원')
]
// my[0].list();
// my[1].list();
// my[2].list();

for(let item of my){
  item.list();
}