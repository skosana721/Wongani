---
Layout:
Title: "startsWith string method"
date: 2021-03-10
---

## Introduction

I will share about code wars kata 'The most asked question on CodeWars' which require me to write a function 'detect that checks if a string starts with the 'Can someone explain' which was case sensitive and if the entered string starts with 'Can someone explain' it would return true if not it returns false.

## Body

For me to find the solution to this kata not that hard because in my mind I ready had a clue of what was required to solve the problem. So it first I tried the includes method but it did not work because the includes method checks the whole string if it has the 'Can someone explain' regardless of where it's found. So I had to read the statement again and understand what the problem wanted me to do and only to found out that I did not pay attention to the word "starts" meaning that they wanted strings that started with 'Can someone explain' and that's is I used the string method startsWith.

startsWith is a string method that is used to determine whether a string starts with a specific sequence of characters.

### Syntax

string.startsWith()

- The startsWith method does a case-sensitive search
- Zero index-based

### Solution to the kata

const detect =(comment)=>{
return comment.startsWith('Can someone explain')
}

## Conclusion

This kata made me realize that sometimes I can be quick to jump to a conclusion without having read the whole sentence and so that what happened, which lead me to write the problem again and this when I understood what was required of me.
