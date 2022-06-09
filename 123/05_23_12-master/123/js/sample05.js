// 전개연산자
const fruit = ['apple','orange','banna']
console.log(fruit);
console.log(...fruit)

// function toOb(a,b,c){
//   return {
//     a:a,
//     b:b,
//     c:c
//   }
// }

// console.log(toOb(fruit[0],fruit[1],fruit[2]));
// console.log(toOb(...fruit))

function toOb(a,b,c){
  return {a, b,c}
}

console.log(toOb(...fruit))


