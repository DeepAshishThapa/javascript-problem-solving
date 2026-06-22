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

// comparing the two arrays, 
let arr1 = [100, 200, 300, 400]
let arr2 = [100, 200, 300, 400]





