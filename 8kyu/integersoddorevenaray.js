// Please make sure everyone at your table understands reduce before you start! Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero). Examples: Input: [0] Output: "even" Input: [0, 1, 4] Output: "odd" Input: [0, -1, -5] Output: "even"


// Params 

//always will have an array. if empty, treat as a 0
//whole numbers, both negative and positive

// Return 

//result will be string of "odd" or "even"
//determine if the SUM is odd or even number
// Examples

console.log(sumOddOrEven([1,2,3]), 6, "even")
console.log(sumOddOrEven([1,2,3,1]), 7, "odd")
console.log(sumOddOrEven([1,2,3,-1]), 5, "odd")
console.log(sumOddOrEven([]), 0, "even")
// Pseudocode

function sumOddOrEven (arr) {
//obtain the sum of the array 
 let sum = arr.reduce((a,c)=>a+c,0) 
// confirm if the sum is odd or even
return (sum%2 == 0) ? "even":"odd"
//return string of "even" or "odd"


