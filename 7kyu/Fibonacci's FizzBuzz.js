

Fibonacci's FizzBuzz

Instructions
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples
Input:

fibsFizzBuzz(5)
Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]
Input:

fibsFizzBuzz(1)
Output:

[1]
Input:

fibsFizzBuzz(20)
Output:

[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
##Good Luck!##

FUNDAMENTALSALGORITHMSPUZZLESGAMES









var fibsFizzBuzz = function(n) {
    // Your code here.
  let fibn1=1
  let fibn2=1
  let fibfn=0
  let arr=[]
  let fibarr=[]
 if (n===1) fibarr.push(fibn1)
 if (n===2) {
   fibarr.push(fibn1)
   fibarr.push(fibn2)
 }
 
  if (n>3){
     fibarr.push(fibn1)
     fibarr.push(fibn2)
    console.log(fibarr)
     for(let i=3;i<=n;i++){
         fibfn=fibn1+fibn2
   
            if(fibfn % 3===0 && fibfn % 5===0){
               fibarr.push("FizzBuzz")}
                 else if(fibfn%3===0){
                   fibarr.push("Fizz")}
                 else if(fibfn%5===0){
                   fibarr.push("Buzz")}
                 else{
                   fibarr.push(fibfn)}
      
       
    fibn1=fibn2
    fibn2=fibfn
    
  }
    
}
  return fibarr
  }
