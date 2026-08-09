//-------------------------------Shallow copy-----------------------------------------------

//1. arrays with primitive values
const arr1= [1,2,3,4];
const arr2= [...arr1];
console.log(arr1);
console.log(arr2);
arr2.push(6);
arr1.push(5);
console.log(arr1);
console.log(arr2);


//2. objects -- here we get the issue, in the shallow copy the object creates an indepenedent copy of the first level, but the deeper levels are shared
const obj1= {
    name:"shriya",
    address:{
        city:"chennai"
    }
};

const obj2 = {...obj1};
console.log(obj1);
console.log(obj2);

obj2.name="Ram";// this will not change the obj1 as it is the first level. obj2 created its independent copy.
console.log(obj2);

obj2.address.city ="hyderabad"; // this will change fro both obj1 & obj2. as it is the deeper level. it will be shared by two original and its copy.
console.log(obj1);
console.log(obj2);

// two diff ways to create a shallow copy

//a. spread operator

const arr3= [1,2,3,4];
const arr4= [...arr3];

const obj3= {
    name:"shriya",
    address:{
        city:"chennai"
    }
};

const obj4 = {...obj3};

//b. Object.assign()

const arr5=[1,2,3];
const arr6= Object.assign({},arr5);
console.log(arr5);
console.log(arr6);

const obj5= {
    name:"shriya",
    address:{
        city:"chennai"
    }
};

const obj6 = Object.assign({},obj5);
console.log(obj6);