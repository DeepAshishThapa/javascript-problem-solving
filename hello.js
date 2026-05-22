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

