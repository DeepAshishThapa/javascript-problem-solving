// wht will be the output of console.log(a)?

function one(){
    return 2
}

function two(){
    return 4
}
// a is assigned as 4 because first it is assigned as 2 when one() runs then let can be resiggned so it becomes 4 at last
let a =(one(), two())


console.log(a);

