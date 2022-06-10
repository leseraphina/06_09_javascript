import num from './export01'
// import {ram,color as main} from './export02'
import * as main   from './export02'

num('welcome export');
// ram();
// console.log(color.name)
// console.log(main.name)

//  main 정리하는 데이터
console.log(main);
main.ram(10);
console.log(main.color.name);
console.log(main.default);

