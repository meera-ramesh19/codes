Odd or Even?

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

FUNDAMENTALSARITHMETICMATHEMATICSALGORITHMSNUMBERSARRAYS


function oddOrEven(array) {
   //enter code here\
 
 const result= array.reduce((acc,c)=>acc+=c,0)
 const str=(result%2===0)?'even':'odd'

return str
}
