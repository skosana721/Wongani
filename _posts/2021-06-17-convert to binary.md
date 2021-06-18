---
Layout:
Title: "Convert to binary"
date: 2021-06-18
---

## Introduction

I will share about a kata that has to do with converting to binary and also the progress with the employee admin

## Body

So was doing a kata that has a function call toBinary which had a parameter for 'n' which is representing the numbers that are being passed as arguments and all the number are non-negative integer and the function should return a number in a binary format. To solve this I used the toString() method which returns a string representing the object. But for number, the toString() method takes an optional parameter radix (meaning base) the value of radix must be a minimum of 2 and a maximum of 32.

### Example of radix is

- 2 for binary numbers
- 8 for octal numbers
- 10 for decimal numbers
- 16 for hexadecimal numbers

So in me, the case passed 2 to the parameter of the toString method which returned the binary format in a string and used the Number() method.

### Solution

const toBinary =(n)=>{
return Number(n.toString(2))
}

## Conclusion

In conclusion, did not know that you can use the toString() method to convert to binary-only thought that it was used to convert numbers to strings only.
