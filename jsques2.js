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

// 7
console.log('A' - 1);  // NaN as its invalid mathematical operation 
console.log("tilak" + '100');

// 8
console.log('2' + 2 + '2')  //222 2 number converts to string become '22' and then becomes '222'
console.log('2'+2-'2')   //+ concatenate string 2 with 2 and becomes string 22 and - does mathenatical subtraction so it converts
                         // string 22 to number 22 and string to number 2 and bcomes number 20

// 9 
const a={}
const b= {name: 'tilak'}
const c={name: 'deep'}

a[b] = {name:'ankit'}
a[c] = {name: 'rahul'}

console.log(a[b])   
 
// 10 
const y = 0
const z = false
console.log(y==z)
console.log(y===z)

// 11 both will give false because both NaN will be different values
console.log(NaN == NaN)
console.log(NaN === NaN)

// 12
const arr3 = [1,2,3,4]

const newarr=arr3.map((num)=>{
    return num>2
})
console.log(newarr)

// 13 








 
