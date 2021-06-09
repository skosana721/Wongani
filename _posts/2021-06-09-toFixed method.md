---
Layout:
Title: "toFixed method"
date: 2021-06-07
---

## Introduction

I will share about the toFixed method which I used while doing kata in codewars.

## Body

So I was doing a kata which had to do with converting USD to CNY and in this kata, you suppose to create a function that converts US dollars (USD) to Chinese Yuan (CNY). The input is the amount of USD as an integer, and the output should be a string that stares the amount of Uan followed by 'Chinese Yuan'.

So to solve this kata created a variable called yuan assigned it to 'usd' which is the parameter name and multiplied with 6.75 which was given as for every 1 USD is equivalent to 6.75 CNY. And used template string to return the variable yuan and used the toFixed() method which formats a number using fixed-point notation. It can be used to format a number with a specific number of digits to the right of the decimal.

#### Syntax

number.toFixed(value)

This method accepts a single parameter value. It signifies the number of digits to appear after the decimal point. And returns a number in the strings presentation. The number has the exact number of digits after eh decimal place as mentioned in the toFixed() method.

#### Solution to converting USD to CNY

function convertUSDToCNY(usd) {
let yuan = usd\*6.75
return `${yuan.toFixed(2)} Chinese Yuan`
}

## Conclusion

In conclusion, if there is no parameter is specified in the toFixed() method then it doesn't display any number after the comma/period sign.
