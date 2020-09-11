---
Layout: 
Title: "filter method"
date: "2020-09-11"
Categories:
---

## Introduction 

Today I will be share about the practice that I gave myself which made me understand how the filter method worked.

## Body 

### Problem 

I had an array where that array had numbers and some of the numbers in the array were repeating so I had to return an array that did not change the order of the number and also the array had to remove any duplicates.

### Solution 

For me to find the solution I had to do some research and that's when I came across the filter method to solve my problem.

#### Array.filter() Method 

The filter() method returns an array containing elements of the parent array that match the set test. A function containing a test is passed as an argument of the filter method. To keep an element the test function should return true and false to discard an element.

#### Syntax

const filteredArray = oldArray.filter(callbackFunction(element[,index[,array]])[, thisArg]).

It takes in five parameters(2 required):

callbackFunction: The function that executes each of the elements of the array. The callback function is required and can take three parameters - required.

element: This is the element currently being executed - required.

index: This is the index of the current item - optional.

array: This is the array that is currently being processed - optional.

thisArg: This is an argument passed to be used as this value in the callback - optional.

#### final solution 

let array = [5,5,2,5,3,3,4,6,7,6,3,]
let newArray = array.filter((a,b) =>  array.indexOf(a) === b)

console.log(newArray)

## Conclusion 

This practice gave me a better picture of how the filter() method works and sometimes it can be used as an alternative to looping.