
Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

FUNDAMENTALSSTRINGSARRAYS

function isVow(a){
2
   a.forEach(function(result,index) {
4
      if (result===97 || result ===101  || result ===105 || result === 111 || result=== 117){
5
          a[index]=String.fromCharCode(result);
6
      }
8
     });
1
     return a;
13
}
14
