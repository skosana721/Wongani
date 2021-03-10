---
Layout:
Title: "startsWith string method"
date: 2021-03-10
---

## Introduction

I will share about codewars kata 'The most asked question on CodeWars' which require me to write a function 'detect that checks if a strings starts with the 'Can someone explain' which was case sensitive and if the entered string starts with 'Can someone explain' it would return true if not it returns false.

## Body

For me to find the solution to this kata not that hard because in my mind the only thing that came was I needed to use string methods to solution the problem. So it first I tried includes method it did not work because the includes method check the whole string if it has the 'Can someone explain' regardless of where it's found. So had to read the again what the problem wanted me to do only to found out that I did not pay attention to the word "starts" meaning that they wanted strings that starts with 'Can someone explain' that is when I used the string method startsWith.

startsWith is a string method that is a used to determine whether a string stars with a specific sequence of character.

### Syntax

string.startsWith()

- The startsWith method is does a case-sensitive search
- Zero index based

### Solution to the kata

const detect =(comment)=>{
return comment.startsWith('Can someone explain')
}

## Conclusion

This kata made me to realize that time I can jump to conclusion without having to read the whole sentence and so that what happened to me which lead me to write again the problem and understand it to final know what's required of me.
