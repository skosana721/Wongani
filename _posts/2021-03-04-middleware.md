---
Layout:
Title: "Middleware"
date: 2021-03-04
---

## Introduction

I will share about express middleware

## Body

Middleware means anything you put in the middle of one layer of the software and another. Express middleware are functions that execute during the lifecycle of requests to the Express server. Each middleware has access to the HTTP request and response for each route (or path) it's attached to. Middleware can either terminate the HTTP request it on to another middleware function using next.

The next function is a function in the Express router which is used to execute the other middleware functions succeeding the current middleware. If middleware functions do include next() here is arbitrary and you can name it whatever you like but is important to stick to best practices and try to follow a few conventions, especially if you are working with other developers. Also, when writing a custom middleware do not forget to add the next() function to it. If you do not mention next() the request-response cycle will hang in the middle of nowhere and your server might cause the client to time out.

Example of custom middleware:

const greetUser = (req, res, next) => {
req.user = true;
if (!req.user) {
res.send(`<h2>Your are not welcomed here</h2>`);
} else {
next();
}
};
app.use(greetUser);

This middleware is used on all routers in the server so every time a route is matched the middleware will be used.

Router-level middleware

router.use((req,res,next) => {

console.log(`Is the user logged in? ${req.authToken ? true : false}`);

next()

})

## Conclusion

In conclusion, middleware helps you to add additional functionality to your server in a way that you can pass other functions to your route as many as you and just like logIn function checks if you are logged in and if you is logged in the next() function will be invoked.
