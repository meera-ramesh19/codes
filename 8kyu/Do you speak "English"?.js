Do you speak "English"?

Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

FUNDAMENTALSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURES


unction spEng(sentence){
//write your code here
 console.log(sentence)
 let res=sentence.match(/english/gi)
  return res?true:false
}
