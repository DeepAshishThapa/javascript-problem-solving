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

// 13 high level function is any function that accepts function as paramter or returns the a function 
// eg1 taking function as parameter
function fun1(name){
    return `hello ${name}`

}
function fun2(callback){
   return callback('deep')
}
console.log(fun2(fun1))
// eg 2 returning function
function fun3(){
    return function fun4(){
        return "hi"
    }
}

const greeting = fun3()
console.log(greeting())

// 14 infinite curry function
function add(a) {
    return function(b) {
        // If 'b' is provided, we aren't done yet! 
        // We do the math (a + b) and pass the new total back into add()
        if (b !== undefined) {
            return add(a + b); 
        }
        // If 'b' is empty (), stop the madness and return the final total!
        return a;
    }
}   
console.log(add(1)(2)(3)())

// 15 destructuring array and object
const desarray=[1, 2, 3]
const [first, second] = desarray
console.log(first)
const desobj={
    name: "deep",
    grade: 10
}
const {name, grade} = desobj
console.log(name)

// 16 Hoisting is js behaviour of processing variable declarations before code execution. So what it does is 
// it scans the whole scope before executing the code and registers the variable in the memory.
// Temporal Dead Zone is the period between entering th scope and the point where let or const variable is initialized. 
// During this period, the variable gets registered in the memory because of hoisting but they cannot be accessed. Tryign to 
// access them before initialization gives error.

// 17 example of showing temporal dead zone
// function temporal(){
//     console.log(a)
//     let a = 2
// }
// temporal()

// 18 return the highest product from the array between two numbers
const arr4 = [1,2,3,4,5,6]

function highproduct(arr4){
    arr4.sort((a, b)=>b - a);

    let max1 = arr4[0]
    let max2 = arr4[1]

    return max1 * max2

}
const highestproduct = highproduct(arr4)
console.log(highestproduct)











 
