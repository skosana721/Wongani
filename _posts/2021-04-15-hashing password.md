---
Layout:
Title: "Hashing password"
date: 2021-04-15
---

## Introduction

I will share about password hashing and I will share what I have learned when was practising hashing

## Body

So firstly I created a post request for '/register' which validate the data from the req. body and if the data does not match the schema requirements it will turn a response with a status code 400 and send an error message. And it also checks if the email exists in MongoDB and if it does it return a response status code of 400 and sends a string to say that the 'Email already exists. And I learned about the bcrypt package which is used for hashing password and salting.

### Bcrypt

- Bcrypt, which is based on the Blowfish cipher and includes salt, is designed to protect against brute-force attacks by intentionally being slower to operate. It has a so-called work factor that effectively puts your password through a definable number of rounds of extension before being hashed.

By increasing the work factor it takes longer to brute-force the password and matches the hash. The theory is that the site owner sets a sufficiently high-enough work factor to reduce the number of guesses today’s computers can make at the password and extend the time from days or weeks to months or years, making it prohibitively time consuming and expensive.

### Salting

Passwords are often described as “hashed and salted”. Salting is simply the addition of a unique, random string of characters known only to the site to each password before it is hashed, typically this “salt” is placed in front of each password.

The salt value needs to be stored by the site, which means sometimes sites use the same salt for every password. This makes it less effective than if individual salts are used.g

## Conclusion

In conclusion, using the bcrypt package you as a developer to keep your users password private in case the database info leaks on one can be able to steal the user's password.
