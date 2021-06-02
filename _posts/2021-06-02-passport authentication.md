---
Layout:
Title: "Passport Authentication"
date: 2021-06-02
---

## Introduction

I will share a little about what I have learned when it comes to passport authentication.

## Body

### Passport

Passport is authentication middleware for Nodejs. It designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable and makes Passport extremely easy to integrate into an application.

So working passport auth will require using express-session which is a middleware that saves the session id as a cookie in the client and allows us to access the session data using that id on the server. This way we keep personal account information out of the cookie used by the client to verify to our server the is authenticated and just keep the key to access the data stored on the server.

So use passport in the app you need to required and assign at to a variable and also the initialize the passport you need to use the initialize method which comes with passport.

#### Initialization of passport

passport.initialize()

Which initializes Passport for incoming requests allowing authentication strategies to be applied.

You need to require an express-session and assigned it to a variable.

### Set up the session

app.use(session({
secret:process.env.
secret: process.env.SESSION_SECRET,
resave: true,
saveUninitialized: true,
}))

## Conclusion

In conclusion, you will be using the session you are required to use the passport.initialize()
