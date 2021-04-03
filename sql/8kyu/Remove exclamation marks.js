
Remove exclamation marks

Output
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

FUNDAMENTALS



module RemoveExclamationMarks where

removeExclamationMarks :: String -> String

removeExclamationMarks string = [ c | c <- string, not (c `elem` "!")]
