


Small enough? - Beginner

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

FUNDAMENTALSBOOLEANSNUMBERSARRAYS







function smallEnough(a, limit){
 
 const ele=a.filter((item)=>item > limit)

 return ele.length===0?true:false
  }
