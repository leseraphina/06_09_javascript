import Data from './data01.json'
import Data01 from './data02.json'

console.log(Data)
console.log(Data01)
console.log(Data01.array)
console.log(Data01.object.a)
console.log(Data01.null)

// json -> 전역객체 -> JSON.매서드()

const color = {
  title:'red',
  sample:'apple',
  no:123
}
console.log(color)

const str = JSON.stringify(color);
console.log(str)

const obj = JSON.parse(str);
console.log(obj)

