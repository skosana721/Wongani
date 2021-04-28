---
Layout:
Title: "Even times last"
date: 2021-04-22
---

## Introduction

I will share about codewars kata which is called 'Even times last'. In the kata, you are given a sequence of integers, if which you are supposed to return the sum of all the integers that have an even index, and that you are supposed to multiple them by the integer at the last index and if the sequence is empty you should return 0

## Body

So to solve this kata I created a variable called sum which initial was 0 and created a lastIndex variable which equal to the last number in the array so to do that called the array and accessed it using square brackets in the used array.length which will find me the length of the array and subtracted 1 from it to find the last index because an array is zero index base so if I did not subtract 1 it would have returned undefined simple because the first value is assigned an index of zero and not 1.
After creating my global variable I created a for loop which iterates the array which checks for the index in the array and created an if statement which checks if the index of the current number of the array is divided by 2 and is strictly equal to 0 the current number should be multiplied by the number with the last index and add to the variable of the sum. And if the statement is false then it should not do anything and outside the for loop function, I returned the sum.

## Conclusion

In conclusion, this was an interesting kata because it forces you to think of not only the index but also the number that is associated with it.
