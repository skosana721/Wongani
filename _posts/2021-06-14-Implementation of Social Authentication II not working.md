---
Layout:
Title: "Implementation of Social Authentication II not working"
date: 2021-06-14
---

## Introduction

I will share a problem that I am having with freecodecamp 'Implementation of Social Authentication II
'

## Body

So I was supposed to add the dependency of 'passport-github' to the project and require 'const GitHubStrategy = require('passport-github').Strategy'. And required and configured dotenv to use the environmental variables.

So to set up the GitHub strategy I told Passport to use an instantiated GitHubStrategy, which accepts 2 arguments: an object (clientID, clientSecret, and callbackURL) and a function to be called when a user is successfully authenticated, which will determine if the user is new and what fields to save initially in the user's database object.

So for me to pass this challenge freecodecamp had three requirements which are 'passport-github dependency should be added', 'passport-github should be required', and 'GitHub strategy should be set up correctly thus far'. The first two passing but the last one which required 'GitHub strategy should be set up correctly thus far' not passing. I could not understand what was the problem because I literally did what they required and even watch some people on youtube do the same challenge as I was doing in the same way that I did it but for me, it was not working. And it even has a section on the page that says "if you're running into errors, you can check out the project completed up to this point" this would take you to a page that would show you the solution but still when I look at it is the same as mine.

## Conclusion

In conclusion, what I find strange is that when I click the button which says 'Login with Github' it does take me to the github authentication page which was what the challenges wanted.
