---
Layout:
Title: "Information security with helmet"
date: 2021-08-04
---

## Introduction

I will share about the freecodecamp information security section where they cover the helmetjs and how it prevents sensitive information from unintentionally being passed between the server and client.

## Body

### Helmetjs

Helmetjs is a useful NOde.js module that helps you secure HTTP headers returned by your Express apps. HTTP headers are an important part of the HTTP protocol but are generally transparent from the end-user perspective. The headers provide important metadata about the HTTP request or response so the client (browser) and server can send additional information in a transaction.

Use installing and using the helmetjs

## Installing helmet

npm install helmet

## Using helmet

const helmet = require('helmet')

app.use(helmet())

Using app.use(helmet()) will automatically include all the middleware that are in-built into the helmet module, except noCache(), contentSecurityPolicy(), but these can be enabled if necessary. And you can also disable or configure any other middleware individually, using a configuration object.

examples of configuring other middleware individually, using a configuration object.

app.use(helmet({

contentSecurityPolicy: {  
 directives: {
defaultSrc: ["'self'"],
styleSrc: ['style.com'],
}
},
dnsPrefetchControl: false  
}))

## Conclusion

In conclusion, implementing helmetjs makes your web application to be more secure from attack and malicious action.
