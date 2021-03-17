---
Layout:
Title: "Sum-Square Even, Root odd"
date: 2021-03-17
---

## Introduction

I will share about a kata that requires me to create a function that takes a list of numbers(nums), as the only argument to the function. I was required to take each number in the list and square it if it is even, or square root the number if it is odd. And after that, I was supposed to take the new list and return the sum of it, rounded to two decimal places.

## Body

For me to find the solution to this kata I used the array map method, which creates a new array with results of calling a function for every array element which the map method has a parameter of num and created an if statement that checks if num reminder 2 strictly equals to 0 it should return the power of that number. And if num is odd it should return the square root of num. So to sum up my number I used reduce which that first return the answer as a string Which I used the Number method to convert it to a number and used toFixed(2) to round up my sum to two decimal.

### Final solution to the Kata

const sumSquareEvenRootOdd = ns => {
let arr = ns.map(num=>{
if(num%2 ===0){
return Math.pow(num, 2)
}else{
return Math.sqrt(num)
}
})
return Number(arr.reduce((acc, curr)=> acc+=curr).toFixed(2))
};

## Conclusion

This kata made me learn some new like toFix method which is not something that I have used before. And it has made me start thinking of the problem as a pizza.
