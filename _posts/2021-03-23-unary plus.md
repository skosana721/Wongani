---
layout:
Title: "unary plus"
date: 2021-03-23
---

## Introduction

I will about the codewars kata which is a sum mixed array in which you are given an array of integers as strings and numberers, and you should return the sum of the array values as if all were numbers.

## Body

For me to find the solution, I used the reduce method because it was an array of numbers and strings which I used the Number method on the accumulator and currentValue which I assigned them to the variables named preNum and currNum which I append both variable to get the sum and assigned the sum to a variable total and assigned total to the accumulator when returning.

### Solution

function sumMix(x){
return x.reduce((acc, curr)=>{
let prevNum = Number(acc)

let currNum = Number(curr)

let total =prevNum+=currNum
return acc=total
},0)
}

but I saw another solution after submitting my solute which they used a plus (+) sign which is called the unary plus. The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number if it isn't already.

### Solution of the unary plus

function sumMix(x){
return x.map(num=> +num).reduce((acc, curr)=> acc+= curr,0)
}

## Conclusion

In conclusion, this solution showed me another way of converting strings to a number which is easy to do and effortless and saves time too.
