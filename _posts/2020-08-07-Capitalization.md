---
Layout: 
Title: "Capitalization"
date: "2020-08-07"
Categories:
---
 
 ## Introduction 

I will share about a codewars kata: Capitalization and Mutability.

## Body

### Problem 

I had a kata that I had to capitalize the first letter of a string. At first, I did not understand what I had to because I did not know about capitalizing letters in JavaScript.

### Solution

So I did some research on the capitalizing letters and I learned about charAt(), toUpperCase(), and slice() which I did a challenge on freecodecamp recently.

This is some of the steps I took to pass the kata:

1. Get the First Letter of the String

I used the charAt() method, at index 0, to select the first character of the string.

2. Convert the First Letter to uppercase

I used the toUpperCase() method and converted the string to upper case.

3. Get the Remainder of the String

I used slice() to get the remainder of the string (from the second character, index 1, to the end of the string).

And here's is the final solution:

function capitalizeWord(word) {
 return word.charAt(0).toUpperCase() + word.slice(1);
}

## Conclusion 

This kata taught me a lot about things that I did not know and it made things to be easy when I was doing the slice() challenge in freecodecamp.


