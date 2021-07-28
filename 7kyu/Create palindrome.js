Create palindrome

Consider the string "adfa" and the following rules:

a) each character MUST be changed either to the one before or the one after in alphabet. 
b) "a" can only be changed to "b" and "z" to "y". 
From our string, we get:

"adfa" -> ["begb","beeb","bcgb","bceb"]

Here is another example: 
"bd" -> ["ae","ac","ce","cc"]

--We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".
You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise.

More examples in test cases. Good luck!

ALGORITHMS




function solve(s){
 for(let i=0;i<s.length/2;i++){  
const first = s[i].charCodeAt()
    const last = s[s.length - (i + 1)].charCodeAt()
    const distance = Math.abs(last - first)
    if (distance > 2 || distance === 1) return false
  }
  return true
      }

     
