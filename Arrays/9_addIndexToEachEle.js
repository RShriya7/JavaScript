/* 9. Add index to each number

Given:

const nums = [10, 20, 30];

Expected:

[10, 21, 32]

Because:

10 + 0
20 + 1
30 + 2

Concept: map(element, index).

This one is particularly useful because it tests whether you know the second argument of map().*/


const nums = [10, 20, 30];
const addIndex= nums.map((num, index) => {return num+index;});

console.log(addIndex);