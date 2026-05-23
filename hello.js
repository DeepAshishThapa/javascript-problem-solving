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

// 4 shallow copy just copies the surface top level of the object. If the object has nested array or object
// then both copied and original data will share same memory address or reference that belongs to the nested data
// so if the nested data is changed, both original and copy changes.
// In deep copy, everything is copied. Both original and copied data will have separate memory address for nested data.
let b ={name: 'Adarsha'}
let z={...a}
z.name = "Adil"
console.log(b) // prints name:adarsha

// 5 curry function
function curryFunc(a){
    return function (b){
        return function (c){
            return a*b*c
        }
    }
}
console.log(curryFunc(1)(2)(3))

// 6 merge string alternatively
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


// flatten the array
const arr2= [[1,2], [3,4], [5,6]]
const flattenArr=[]
for (let i of arr2){
    for (let num of i){
        flattenArr.push(num)


    }
}
console.log(flattenArr)


