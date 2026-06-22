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
