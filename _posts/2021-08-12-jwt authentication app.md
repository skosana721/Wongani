---
Layout:
Title: "JWT Authentication"
date: 2021-08-12
---

## Introduction

I will share about the JWt Authentication app that Moral wants us to do.

## Body

So Moral give us to build a app that user can be able to register and login. The app is suppose to use JWT for authorization and also password should not be saved as plain passwords so they should be hashed when saved the user to the database. So when a user is not authorize the user should be redirect to the register form and if the user is authorized the user will be taken to a dashboard which will display a 'welcome' message with the user name and the dashboard component is a private route. The dashboard can only display to users that are authorize.

## JSON Web Token (JWT)

JSON Web Token (JWT) is an open standard (RFC 75190) that defines a compact and self-contained way for securely transmitting information between parties as a JSOn object. This information can be verified and trusted because it is digitally signed. JWTs can be singed using a secret (with HMAC algorithm) or a public/private key pair using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

## Conclusion

In conclusion, this app will help to better understand JWT authorize and also authorization general and the flow of it.
