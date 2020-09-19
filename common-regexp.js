
Age: A regex that allows users to enter only numbers between 0 and 200
^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$
/\s[0-1]{1}[0-9]{0,2}/
Only numbers between 0 and 200:         [0-1]{1}[0-9]{0,2}
Number, Exactly 2 or more               ^\d{2,}$
Only numbers between 10 and 99:         ^[1-9]{1}[0-9]{1}$
Phone Number:
Should at least be 10-digits:           ^\d{10}$



Find any word in a list of words
Word Boundary:                          \bTHING|\bITEM|\bFOO
                                      


Match string not containing string:     ^((?!badword).)*$
Given a list of strings
(words or other characters),
only return the strings that do
not match.

Tests:
badword
test
one two
abadwords
three