/* 6. Double every number
const nums = [1, 2, 3, 4, 5];

Expected:

[2, 4, 6, 8, 10]

First solve with a loop, then with map(). */
const arr=[1,2,3,4,5];
const double = arr.map(num => num*2);
console.log(double);