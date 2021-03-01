---
Layout:
Title: "ToString method"
date: "2021-03-01"
---

## Introduction

I share will share about the toString method which I used to complete a kata in codewars.

## Body

What is the toString() method?

The toString() method in JavaScript is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.

### Syntax

num.toString(base)

In my case, I had to write a function that converts a given boolean value into its string representation. So a value of true or false is passed as an argument if it is a boolean the function wraps the value with quotes regardless of it being true or false.

### solution

function booleanToString(b){
if( b === true || b === false){
return b.toString()
}
}

## Conclusion

So for me to solve this kata I only did little research on toString() method which is what I used to get to the solution.
