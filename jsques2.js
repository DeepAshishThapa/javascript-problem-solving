// 1. wht eill be the output
console.log(typeof typeof 100)

//2. wht will be the output
const arr=[..."hello"]
console.log(arr)

// 3. 
console.log(parseInt('10+2') )
console.log(parseInt('7FM') )
console.log(parseInt('M7F') )  

//4. 
console.log([1,2].map((num)=>{
    if (num>0) return;
    return num *2
}))

// 5. slice is a built in function in js used to extract a section of array or string and returns new array or string without
// modifying the original data. While splice is built in function used to add, remove or replace items inside existing array.

// 6.
const arr2= [8,2,3,5]

const findthevalue = arr2.find((value)=>value>4)

console.log(findthevalue)

 
