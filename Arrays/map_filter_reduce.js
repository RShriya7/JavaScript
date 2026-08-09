//map() -- used to transform the array. it returns a new array which will be the reault of the transformation.

const arr= [1,2,3,4,5];
const double = arr.map(nums=> nums*2);
console.log(double);

//edge case - 1. empty array
const a=[];
const a_res= a.map(num=> num*2);
console.log(a_res);

//edge case - 2. missing return statement
const b=[1,2,3];
const b_res= b.map(num=> {num*2});
console.log(b_res);

//edge case - 3. undefined and null values
const c=[1,null,3,undefined];
const c_res= c.map(num=> {return num*2;});
console.log(c_res);


//filter() -- used to filter the given array based on a condition. it returns a new array with only elements which only satisfy the condition

const arr1=[1,2,3,4,5,6];
const even = arr1.filter(num=> num%2 ===0);
console.log(even);

//edge case - 1. empty array
const a1=[];
const a1_res= a1.filter(num=> num%2===0);
console.log(a1_res);

//edge case - 2. missing return statement
const b1=[1,2,3];
const b1_res= b1.filter(num=> {num%2===0});
console.log(b1_res);

//edge case - 3. undefined and null values
//const c1=[undefined];
const c1=[null];
const c1_res= c1.filter(num=> {return num%2===0;});
console.log(c1_res);