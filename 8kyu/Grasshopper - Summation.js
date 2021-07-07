Grasshopper - Summation

Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
FUNDAMENTALSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURES




var summation = function (num) {
  // Code here
  let sum=0
  for(i=1;i<=num;i++){
    sum=sum+i
  }
  return sum
}
