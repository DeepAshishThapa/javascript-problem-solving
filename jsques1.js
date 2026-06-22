// 1. wht will be the output of console.log(a)?
function one(){
    return 2
}

function two(){
    return 4
}
// a is assigned as 4 because first it is assigned as 2 when one() runs then let can be resiggned so it becomes 4 at last
let a =(one(), two())


console.log(a);

// 2. whht will be the output
const arr=['one', 'two', 'three']
const str="hello"

const res= arr.includes('on')
const anotherVar = arr.includes('onetwo')

const newVar= str.includes('ll')

// output will be (flase, flase, true) because arr.includes checks if the 'on' is exaclty as element in array arr. 
// and str.incldes('ll') if there is a substring in the string which is sequetially as 'll'
console.log(res, anotherVar, newVar)

// 3. what is the output
console.log(true == '') // its going to be false because == converts both side to sam data type and compares if equal. true becomes 1 and '' becomes 0

// 4. shallow copy just copies the surface top level of the object. If the object has nested array or object
// then both copied and original data will share same memory address or reference that belongs to the nested data
// so if the nested data is changed, both original and copy changes.
// In deep copy, everything is copied. Both original and copied data will have separate memory address for nested data.
let b ={name: 'Adarsha'}
let z={...a}
z.name = "Adil"
console.log(b) // prints name:adarsha

// 5. curry function
function curryFunc(a){
    return function (b){
        return function (c){
            return a*b*c
        }
    }
}
console.log(curryFunc(1)(2)(3))

// 6. merge string alternatively
function mergeStrings(str1, str2){
    let minlength = Math.min(str1.length, str2.length)
    let result = ""

    for (let i=0; i<minlength; i++){
         result = result + str1[i]
        result = result + str2[i]   


    }

    result = result + str1.slice(minlength)
    result = result + str2.slice(minlength)

    return result


}

console.log(mergeStrings("hello", "world123"))




// 7. flatten the array
const arr2= [[1,2], [3,4], [5,6]]
const flattenArr=[]
for (let i of arr2){
    for (let num of i){
        flattenArr.push(num)


    }
}
console.log(flattenArr)


// 8. wht will be the output?
// function a(){
//     console.log(a.xyz)
// }

// a()    // undefined
// a.xyz=400
// a.xyz=200 

// a()    // 200 because in javascript functions are all converted as objects. So, .xyz is a property which is 
//        // undefined at first then we assign as 400, then again reasign as 200 and then it prints 200.
    

// 9. Event propagation is the mechanism that determines the order in which event handlers are fired when an action like 
// click happens in web page. There are 3 phases: capturing phase, target phase and bubbling phase. Capturin phase is when 
// event goes from top DOM to the inner parent element and goes downward one by one. target phase is when event arrives at the
// target element, the exact html element that triggered the event. The bubbling phase is when the event moves from the 
// targeted element to the parent element and moves in upward direction reaching to body, html and finally window.\
// const list = document.getElementById('todo-list');

// // We only attach ONE event listener to the parent <ul>!
// list.addEventListener('click', function(event) {
  
//   // event.target is the exact, specific <li> that was clicked!
//   if (event.target.classList.contains('item')) {
//     console.log("You clicked on item: " + event.target.innerText);
//     event.target.style.textDecoration = 'line-through'; // Cross it out
//   }
  
// }); 

// 10. wht will be the output
const num=[1,2,3,4]
num[100]=500
console.log(num)

// 11. Whats rest parameters?
 //  Rest parameter is parameter that allows function to accept indefinite number of arguments as a single javascript array 
 // by using triple ... inside the function where we accpet parameter.
 function resParam(...parm){
    console.log(parm)
 }
 resParam(1,2,4)

 // 12 another example of rest parameter with another normal parameter
 function restPara( x, ...rest){
    return rest
 }

 console.log(restPara(10, 12, 34, 56, 'hello'));

// 13 all arrays typeof is an object
 console.log(typeof {name:"deep"})

 // 14 different scopes available in javascript
 // Global, function and block scope.

 // 15 it will print 500 as var is not block scoped so x will be reinitialized as 500 and apple will be 500 
 var x = 100
 {
    var x = 500
 }
 let apple = x
 {
    let apple = 10000
 }

 console.log(apple)

 // 16 list all structues of loop in javascript
 // For loop, while loop, do while loop, for each loop, for of , for in

 // 17 whts is the difference between for each and map loop
//  map can return the new array based on out calculation with the same length as original array bit for each donot return anything 
//  if we try to access the return value of for each it will be undefined but its not necessary to transform

// 18 why we use join method?
// The join method creates and returns new string by concatenating all the elements in an array separated by a specific 
// separator sting.
const fruits = ['apple', 'banana', 'orange']

const fruitString = fruits.join('+')
console.log(fruitString)

// 19 why do we use split method?
// Split method takes a string and breaks it apart into array of small strings based on separator you choose. 
  const sentence = "HTML-CSS-Javascript"
  const tools = sentence.split("-")
  console.log(tools)




 

