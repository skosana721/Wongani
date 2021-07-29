---
Layout:
Title: "TypeError:  Cannot read property 'split' null"
date: 2021-07-29
---

## Introduction

I will share about TypeError: Cannot read property 'split' null which caused the error

## Body

So was doing the challenge in freecodecamp which had to do with 'Implement the Serialization of a Passport User', so in the challenge, I was supposed to set up a database and connect it to the server so that it can keep a continuous connection for the full life-cycle fo the app. I add my database connection string in the env file which they had pre-defined the name for the connection string which was initial empty single quotes and the only thing that I did was just paste the connection string in the empty quote and after saving the changes the server started crashing saying that 'TypeError: Cannot read property 'split' null'.

At first, I did not know what was causing the error because in the terminal it was not saying which line was causing the server to crash and I tried copying the error and paste it into google to see if I would find a possible solution but the only things I found were irrelevant. So I asked Mark to assist me with the problem and what I find out was that in the env file you are not supposed to use to single quote but instead you should use a double quote. So double-quotes group substring and prevents substitution while single-quotes groups substring and prevents substitution.

## Conclusion

In conclusion, I only assigned the connection string without quotes but this info was useful because I learned something that no one has ever shared with even freecodecamp.
