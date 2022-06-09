//  클래스 생성

class Book{
  //  데이터 생성
  constructor(type, title){
    this.type = type;
    this.title = title;
  }
  //  매서드
  action(){
    document.write(
      `
      <p> ${this.type} : ${this.title}</p>
      `
    )
  }
}

//  인스턴스
// const photo = new Book('graphic','photoshop');
// const vetor = new Book('graphic','illustrator');
// const it = new Book('it1','html');

// photo.action();
// vetor.action();
// it.action();

const my = [
  new Book('graphic','photoshop'),
  new Book('graphic','illustrator'),
  new Book('it1','html')
]

my[1].action();

for(item of my){
  item.action();
}

