---
Layout:
Title:'Abbreviate a two name'
date: 2021-05-03
---

## Introduction

I will share about kata which had to with converting a name into initials and this kata strictly takes two words with one space in between them. And the output was supposed to be two capital letters with a dot separating them.

## Body

Solving this was hard because I did not know how to approach it so the first thing I did console the input to see the data that I was receiving so what I taught initially was that both words would have the first letter toUpperCase but only to find out that some were a mix of camelCase and some were lower upper. So my first solution was to convert the string to an array with split and loop through the array and create an if statement check for the upperCase letters it did not work and this was before doing the console log.

for the solution to that kata did some research and come across something that needs to start solving the problem. So for me to be able to find the first name in the string I used the substr method which returns the part of the string between the start and end indexes, or to the end of the string. So my starting point was index zero and the endpoint was at the index where the is whitespace. And to select the first letter in the string I used the charAt method which is a string object method that returns a new string consisting of the single letter in the string based on its index. And used the toUpperCase method which capital the letter and returned them in temple string with a dot between them.

## Conclusion

In conclusion, doing this kata helped me need about substr method which is something that I did not know about and that you can select parts of a string with it. And something that I also did not know was that whitespace had index value.
