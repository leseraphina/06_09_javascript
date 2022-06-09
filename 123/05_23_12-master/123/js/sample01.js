
// class Rect {}
//  대입 -> 할당
let Rect = class{
 constructor(height,width){
   this.height = height;
   this.width = width;
 }
 call(){
   return this.width * this.height;
 }
}
const my = new Rect(100,200);
console.log(my.call());

// class Reac1 extends Rect{}
let Rect2 = class Rect{
constructor(height,width){
  this.height = height;
  this.width = width;
}
call(){
  return this.width * this.height;
}
}
const my1 = new Rect(100,200)
console.log(my1.call())