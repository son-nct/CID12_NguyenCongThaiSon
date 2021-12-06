import {greatePerson,sum} from './3_great.js' // syntax import {nameFunction} from '...path'

let displayName = greatePerson('sơn');

console.log(displayName);

console.log(sum(2,3));

// do import tên function ko tồn tại trong 3_great.js thì mặc định gọi hàm export default 
import randomName from './3_great.js';

console.log(randomName('Tuấn'));

