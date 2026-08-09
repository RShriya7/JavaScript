function Allmethods()
{
    //mutating -- changing the original array
    // non mutating -- doing the change in the copy of the original array and returning that new array.

    //1. slice -- non mutating
    //to extract the portion of an array
    console.log("Slice Method:")
    const arr=[1,2,3,4];
    const res = arr.slice(1,3);
    console.log(res);

    //Edge cases:
    console.log(arr.slice(-2));//gets last 2 elements
    console.log(arr.slice(0));
    console.log(arr.slice(5));

    //2. Splice method -- mutating
    //to add, delete and replace elements
    const arr1=[1,2,3,4];
    //remove
    const remove = arr1.splice(1,1);
    console.log("removed element:",remove);
    console.log("array after we removed an element:",arr1);

    const rem= delete arr1[1];
    console.log(arr1);

    //add
    const add= arr1.splice(1,0,99);
    console.log("removed element:", add);
    console.log("after adding:", arr1);

    //replace
    const replace = arr1.splice(2,1,50);
    console.log("replaced element",replace);
    console.log("after replacing:",arr1);

    //3.concat -- to merge two arrays
    const res1=[1,2,3];
    const res2=[4,5,6];

    const result = res1.concat(res2);
    console.log(result);

    //4. includes() -- checks if an element exists or not
    console.log(result.includes(8));
    console.log(result.includes(2));

    //5. indexOf() -- tells the index of the element
    console.log(result.indexOf(2));
    console.log(result.indexOf(9));
}

Allmethods();