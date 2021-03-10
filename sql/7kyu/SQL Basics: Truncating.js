SQL Basics: Truncating

Instructions
Output
Given the following table 'decimals':

** decimals table schema **

id
number1
number2
Return a table with one column (towardzero) where the values are the result of number1 + number2 truncated towards zero.

FUNDAMENTALSNUMBERSMATHEMATICSALGORITHMSSQLDATABASESINFORMATION SYSTEMSDATA




/*  SQL  */
select trunc(number1+number2) as towardzero from decimals
