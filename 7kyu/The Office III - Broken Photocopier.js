
The Office III - Broken Photocopier

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

The Office I - Outed
The Office II - Boredeom Score
The Office IV - Find a Meeting Room
The Office V - Find a Chair

FUNDAMENTALSSTRINGSARRAYS


function broken(arr){
 arr=arr.split('')
 const res= arr.map((item)=> item==='1'? '0':'1');
 return res.join('')
}
