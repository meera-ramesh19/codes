
Thinkful - String Drills: Repeater

Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example:
Repeater.repeat("a", 5)
should return

"aaaaa"
FUNDAMENTALSfunction repeater(string, n){
  //Your code goes here.
  let str=''
  for(let i=0;i<n;i++){
    str+=string
  }
 return str
}
