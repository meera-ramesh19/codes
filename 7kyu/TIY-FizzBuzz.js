
TIY-FizzBuzz
|
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?

FUNDAMENTALS
function tiyFizzBuzz(sentence){
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  
  return sentence.split('').map((item, index, array) => {
    if (item === item.toUpperCase() && vowels.includes(item)) {
      return 'Iron Yard';
    }
    
    if (item === item.toUpperCase() && item.match(/[a-z]/i)) {
      return 'Iron';
    }
    
    if (vowels.map(x => x.toLowerCase()).includes(item)) {
      return 'Yard';
    }
    
    return item
  }).join('');
}
