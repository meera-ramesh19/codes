Regexp Basics - is it a digit?

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

FUNDAMENTALSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESSTRINGS


String.prototype.digit = function() {
  return /^\d$/g.test(this);
  
  
};
