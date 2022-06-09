//  기본 만들기
class Book{
  constructor(type,title){
    this.type = type;
    this.title = title;
  }
  list(){
    document.write(
      `<p>${this.type} : ${this.title}</p>`
    )
  }
}

const myBook = new Book('개발서','프론트엔드')
myBook.list();

//  자식class

class Graphic extends Book{
  constructor(type,title,level){
    super(type,title)
    this.level = level;
  }
  list(){
    document.write(
      `<p>${this.type} : ${this.title} : ${this.level}</p>`
    )
  }
}

const myGraphic = new Graphic('사진편집','photoshop','1')
myGraphic.list();

//  자식2
class It extends Book{
  constructor(type,title,year){
    super(type,title);
    this.year = year;
  }
  action(){
    document.write(
      `<p>${this.type} : ${this.title} : ${this.year}</p>`
    )
  }
}
const myIt = new It('basic','html','2021');
myIt.action();