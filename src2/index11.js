const fruit = ['apple','orange','banana']

// function toOb(a,b,c){
//   //return {a:a, b:b ,c:c}
//   return {a,b,c}
// }

//const toOb = function(){}
//const toOb = (a,b,c) => {return {a:a,b:b,c:b}}
//const toOb = (a,b,c) => {return {a,b,c}}
//const toOb = (a,b,c) => return {a,b,c}
const toOb = (a,b,c) => ({a,b,c})
console.log(toOb(...fruit))

//  이해가 되어야 됨

const word = ['red','blue','green','orange','white','black']
const myWord = (a,b,c,...d) => ({a,b,c,d})
console.log(myWord(...word));

