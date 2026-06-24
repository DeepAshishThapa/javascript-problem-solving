// 1. function to reverse a string
function reversestring(str){
    reversedstring = ""
    for (let char of str){
        reversedstring = char + reversedstring
    }
    return reversedstring
}

console.log(reversestring("hello"))

// 2. function to reverse each word of senence
function reverseSentence(sentence){
    return sentence
    .split(" ")
    .map((word)=>word.split('').reverse().join(''))
    .join(" ")
}

console.log(reverseSentence("I am here"))

// 3 to reverse entire sentence
function reverseSentence2(str){
    reversedsentence=""
    for (let char of str){
        reversedsentence = char + reversedsentence
    }
    return reversedsentence
}

console.log(reverseSentence2("I am here"))

// 3 check if the string is palindrom or not
function isPalindrome(str){
    let reversed = str.split('').reverse().join('')

    return reversed === str
}

console.log(isPalindrome("racecar"))

// 4 comparing the two arrays or objects
let arr1 = [100, 200, 300, 400]
let arr2 = [100, 200, 300, 400]
 
const isEqual = JSON.stringify(arr1) == JSON.stringify(arr2)
console.log(isEqual)

// 5 output will be true because when we use == it will convert both sides into same data type, both is coverted to 0 and 
// will return true as they are equal.
console.log(null == undefined)

// 6 assign a new array of size 100
const arr = new Array(100).fill(0)
console.log(arr)

// 7. How to check the data type of variable and type od NaN is number, type of null is object and undefined is undefined.
const x = 1
console.log(typeof x)

// 8. All variables are stored in RAM, which the system splits into two distinct regions stack and heap. A stack is fast, 
// highly organized but small memory space. It operates on a strict structure where things are piled on top of each other.
// A heap is a massive dynamic but less organized memory space to store large or unpredictable sized pieces of data. 

// 9. Whts is primitive and non primitive data types.
// Primitive data types are data stored directly in the stack memory where the variable name and its actual, exact value lives
// in stack like number, boolean, undefined, string, etc. They are Immutable.
// Non primitive data types are the data that lives in the heap memory where the stack doesn't hold the data instead the stack
// only stores the memory reference or address that points where the data is inside the heap. Link objects, function and array.

// 10 Assignment (=): Copies only the memory address. Both variables now point to the exact same object in the Heap. Changing
//  one changes the other.
// Shallow Copy: Creates a brand-new object in the Heap and copies over the top-level values. However, if there are nested objects
//  inside, it only copies their memory addresses. The sub-objects are still shared.
// Deep Copy: Recursively clones the main object and every single nested object inside it. This creates a 100% independent clone
//  in a completely separate part of the Heap.

// 11. Showing assignment lazy copy, shallow copy and deep copy
let originalObj = {name: "Alice"}
let assignedObj = originalObj
assignedObj.name = "hello"
console.log(originalObj)

let originalNested = {name: "Alice", details:{ age: 25 }}
let shallowObj = {...originalNested}
shallowObj.name = "Rahul"
shallowObj.details.age = "20"
console.log(originalNested.name)
console.log(originalNested.details.age)

let deepObj = structuredClone(originalNested)
deepObj.details.age = 99
console.log(originalNested.details.age)

// 12. Promise chaining is a techique in javascript to execute a sequences of asynchronous tasks one after another instead of
// nesting callbacks inside callbacks leading to callback hell. We line up asynchronous step using chain of .then blocks and 
// each .then() receives the result of previous step.

// 13 a promise is javascript object which represents completion or failure of asyncronous operation that has 3 stages pending,
// fulfilled and rejected. Pending is the initial step where asynchronous code is still running and outcome hasn't been decideed.
// Filfilled is when operation operation is completed and promise now returns a value and rejected is when operation failed and
// promise gives error.










 












