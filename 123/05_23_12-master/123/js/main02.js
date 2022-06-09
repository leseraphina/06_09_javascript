import data from './data01.json';
console.log(data);

console.log(data.array)
console.log(data.object.a)
console.log(data.null)

//  json -> 전역객체
//  일반객체 -> json

const color = {
  title:'red',
  sample:'apple',
  no:100
}
const str = JSON.stringify(color)
console.log(str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log(obj);
console.log(typeof obj);

