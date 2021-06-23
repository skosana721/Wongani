---
Layout:
Title: "Every method"
date: 2021-06-23
---

## Introduction

I will share about a kata called 'Small enough' so in this kata you are given an array that contains numbers and a limit value. So the goal of this kata is to check that all values in the array are below or equal to the limit value and if they are, return true. Else, return false.

## Body

so this kata has given a problem for a long time. What helped me to solve this kata was that I did some research on 'checks if the numbers in an array are below a certain value' but I know that the old for loop could do. But in my case when I was using the for loop so the tests were not passing. So while looking for a clue on the internet on how to solve the problem I came across the every() method which is an array method. The every() method
tests whether all elements in the array pass the test implemented by the provided function and it returns a Boolean value.

### Syntax

arrayObject.every(callbackFunction(element, index, array))

#### element

-The current element being processed in the array.

#### index

- The index is the index of the current element

#### array

-The array is the array that every() method was called upon

In my use case, I use the every on the array that was passed in the function and added a condition to check if the current number is less than or equal to the limit value and if would return true if the condition is met, else false.

### Solution to the kata

function smallEnough(array, limit){
return array.every((number)=> number<= limit)

}

## Conclusion

In conclusion, I never thought that such a method even exists in JavaScript so I would that you learn something new every day in this field of being a coder so I see myself implementing this method into my code one day.
