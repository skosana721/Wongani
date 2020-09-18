---
Layout: 
Title: "higher-order functions"
date: "2020-09-18"
Categories:
---

# Introduction 

I will share about higher-order functions in javascript

# Body 

## What are higher-order functions?

Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple terms, A Higher-Order function is a function that receives a function as an argument or returns the function as output.

For example, Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order functions built into javascript.

## Array.prototype.map 

The map() method creates a new array by calling the callback function provided as an argument on every element in the input array. The map() method will take every returned value form the callback function and creates a new array using those values.

The callback function passed to the map() method accepts 3 arguments: element, index, and array.

## Array.prototype.filter

The filter() method creates a new array with all elements that pass the test provided by the callback function. The callback function passed to the filter() method accepts 3 arguments: element, index, and array.

## Array.prototype.reduce 

The reduce method executes the callback function on each member of the calling array which results in single output value. The reduce method accepts two parameters: 1) The reducer function (callback), 2), and an optional initialValue.

The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray.

If an initialValue is provided, then the accumulator will be equal to the initialValue and the current value will be equal to the first element in the array.

If no initialValue is provided, then the accumulator will be equal to the first element in the array and the current value will be equal to the second element in the array.

# Conclusion 

Higher-order function, in short, is short, simple, and readable because the higher-order function returns a function when executed and takes a function as one or more of its arguments, or both.


