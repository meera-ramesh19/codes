

Alphabetized

The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
Inspired by Tauba Auerbach

PUZZLESSTRINGSSORTINGALGORITHMS



function alphabetized(s) {

 s=s.split(' ').join('')
 const str=s.replace(/[^a-zA-Z]+/g,'')
 const res= str.split('').sort(function(a,b){
   if (a.toLowerCase() > b.toLowerCase()) {return 1;}
   else if 
     (a.toLowerCase() < b.toLowerCase()) {return -1;}
   else {
     if(s.indexOf(a)<s.indexOf(b)){return -1}
     else {return 1}
  }
  }).join('')
 return res
  }
