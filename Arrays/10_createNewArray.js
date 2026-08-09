/*
10. Create a new array without modifying the original
Given:
const nums = [1, 2, 3];
Create:
[10, 20, 30]
while keeping:nums unchanged.
Concept: immutability + map().

*/

const nums = [1, 2, 3];
const newNums = nums.map(num => num*10);
console.log(newNums);