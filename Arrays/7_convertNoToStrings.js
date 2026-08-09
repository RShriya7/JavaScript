/* 7. Convert numbers to strings
const nums = [10, 20, 30];

Expected:

["10", "20", "30"]

Concept: map() transformation. */


const arr=[1,2,3,4,5];
const toString = arr.map(num => num.toString());//fails on null/undefined
console.log(toString);
const string = arr.map(num => String(num));// this is best as it doesnt dail on null/undefined
console.log(string);