const fruit = ['apple','orange','banana']
console.log(fruit)
console.log(...fruit)

function toOb(a,b,c){
 return {a:a,b:b,c:c}
}
console.log(toOb(fruit))
console.log(toOb(fruit[0],fruit[1],fruit[2]))
console.log(toOb(...fruit))