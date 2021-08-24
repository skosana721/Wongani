---
Layout:
Title: "Creating a jwt token"
date: 2021-08-24
---

## Introduction

I will share about creating a jwt token when a user register or log's in.

## Body

So in the register route, I did req.body validation before making a new user so I checked if the req.body.username has 6 or more characters, and check if the req.body.email is a valid email, and also checked if the req.body.password has 6 or more characters. And also checked if the user exists in the database using the email and if the user exists in the database the server will respond with a message saying 'Email already exists'. And before creating a new user I generated a salt of 10 and after salting I hashed the password with that generated salt and passed it when creating a new user. And created a variable called token and used jwt.sign to created a token and as a payload passed the newUser.\_id and passed token secret as the second argument and as for the third argument passed in the expiration time. And as a response with a JSON object which has the token variable and also the newUser object. And for the login route checked if the also the req.body is valid and this time checked if the user does not exist in the database and if the user doesn't exist send a message saying 'Email does not exist. And also created a variable called validPassword which compared the req.body.password and the user.password to see if they match. And if they match a token would be created for that user and send a JSON object containing the token and user as a response.

## Conclusion

In conclusion, jwt authorization is a bit difficult but I can understand it a little bit in terms of how things flow and also why you need it.
