/* 8. Get length of every string
const names = ["Shriya", "Ram", "John", "Alex"];

Expected:

[6, 3, 4, 4]

Concept: transforming each element. */

const names = ["Shriya", "Ram", "John", "Alex"];
const lenOfEachString = names.map(str => str.length);
console.log(lenOfEachString);