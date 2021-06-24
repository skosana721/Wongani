---
Layout:
Title: "Regular expression"
date: 2021-06-24
---

## Introduction

I will share what I learned regarding the regex

## Body

### Regular expressions

Regular expressions(also know as regex) are patterns used to match character combinations in strings. In JavaScript, regular expression are also objects. These pattern are used with the exce(), and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

### Creating a regex expression

-Using a rgualar expression literal, which consists of a pattern enclosed between slashes, as follows:

let regex = /ab/

- Or Calling the constructor funcof the RegExp object, as follows:

let regex = new RegExp('ab')

### Character set

- Matches a single character present in the ist below
  e.g
  const charset = [lbcp]]ook

### Escape character

- Matches a single characeter not present in the list below
  e.g
  const list2 = [^kjsladfjali]ook

### Ranges

- ranges is a short way to match a series characters

e.g
const list3 = [a-zA-z]

- match of a range of numbers
  const list = [0-9 ]

## Repeating characters

- specify how many times the characters should repeat or checks for a specific length

e.g
const list = [0-9]{5}

- to set min and max length
  const list = [a-z]{6, 12}

## Metacharacters and escaping

#### Metacharacters

\d- match any digit character(same as [0-9])
\D - match non-digit character
\w - match any word character(a-z, A-Z, 0-9 and \_'s)
\W - match a non-word character
\s - match a whitespace character (spaces, tabs etc)
\S - match a non-whitespace character
\t - match a tab character only
\b - match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B - match, but not at the beginning/end of a word
'.' - match a single character, except newline or line terminator
\n - finds a newline character
So writing 'd' only matches the literal character 'd' while '/d' matches any digit character

### Special characters

'+' - The one or more quantifier
'\' - The escape character
'[]' - The character set
'[^]' - The negate symbols in a character set
'?' - The zero or more quantifier (makes a preceding character optional)
'\*' - The zero or more quantifier

## Conclusion

IN conclusion, I would say now that I know a little about regular expression so think I can implement the validation for the South Africa id on the employee admin that Moral gave us to do.
