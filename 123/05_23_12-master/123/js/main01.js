import num from './export01'
// import {ram,color} from './export02'
//  import {ram,color:red} from './export02'
//  import {ram,color as main} from './export02'
import * as main from './export02'
num('string');

// console.log(ram(100));
// console.log(main.color.name);
console.log(main.ram(10));
console.log(main);
console.log(main.color.name);
console.log(main.default)