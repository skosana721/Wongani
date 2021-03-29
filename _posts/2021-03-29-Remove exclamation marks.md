---
Layout:
Title: "Remove exclamation marks "
date: 2021-03-29
---

## Introduction

I will share about a kata in codewars which has to do about remove exclamation marks in string. This kata gave me the challenge to find the solution at first I thought it was just a simple kata that I would just finish in less than maybe 3 minutes but I ended up spending about 20-25 minutes trying to find a way to solve this kata. I tried the replace method which is a method that returns a new string with some or all matches of a pattern replaced by a replacement and the first argument is the substring which is the string you when to replace and the second is the replacement string.
So I passed the exclamation marks as a substring and empty quotes as my second string to replace the '!' but that did not work for all the tests it only worked for the first one so I did research to find some clue on how to solve the problem.

### First attempt solution

This solution did not work

function removeExclamationMarks(s) {
return s.replace('!', '')
}

## Body

So for me to find a solution I had to look into regexp as a way to solve the kata. Regexp in simple terms used to match text with a pattern.

### The literal notation of regexp

let regexp = /do something/;

Literal notation's parameters are enclosed between slashes and not quotes.

### Final solution

function removeExclamationMarks(s) {
return s.replace(/!/g, '')
}
The g in regular expression is used to check for all possible matches in the string.

## Conclusion

In conclusion, this challenge showed me that I should learn more about regular expression so that I can have more ways of solving problems in the future.
