---
Layout:
Title: ""
date: 2021-04-07
---

## Introduction

I will share about codewars kata which require to find numbers which are divisible by given number.So the function takes two arguments and returns all number which are divisible by the given divisor. First argument is an array of 'numbers' and the second is the 'divisor'.

## Body

So to solve this kata I implemented a for loop to loop through the array of numbers and in the code block of the for loop I also implement an if statement to check if a number in the array is divided by the divisor it does not leave a remainder and if the condition is true it pushes to array which initial is empty. And to do this I used the JavaScript remainder operator. The remainder operator return the remainder left over when one operand is divided by a second operand.

### Solution

function divisibleBy(numbers, divisor){
let results =[]
for( let i in numbers){
if(numbers[i]%divisor === 0){
results.push(numbers[i])
}
}
return results
}

## Conclusion

In conclusion , I have seen that doing more and more katas helps in your problem solving skills because you are able to know what a kata requires and you can come up with solutions in your mind without doing any implementation
