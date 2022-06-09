// 전개연산자
const fruit = ['apple','orange','banna']
console.log(fruit);
console.log(...fruit)

// function toOb(a,b,c){
//   return {a, b,c}
// }

// const toOb = function(a,b,c){
//   return {a,b,c}
// }
// const toMain = () ->({a})
const toOb = (a,b,c) =>({a,b,c})
  //{return {a:a,b:b,c:c}}
  //return {a:a,b:b,c:c}
  //return {a,b,c}
  //{a,b,c}
  
// console.log(toOb(1,2,3))
console.log(toOb(...fruit))


const word = ['red','blue','green','orange'];
const myWord =  (a,b,...c) => ({a,b,c});
console.log(myWord(...word));
