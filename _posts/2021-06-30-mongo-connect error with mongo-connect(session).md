---
Layout:
Title: "mongo-connect error with mongo-connect(session)
"
date: 2021-06-30
---

## Introduction

I will share about the problem that the freecodecamp challenged named 'Authentication with Socket.IO'.

## Body

So the challenge says that currently, you cannot determine who is connected to your web socket. While req.user contains the user object, that's only when your user interacts with the web server, and with web sockets, you have no req (request) and therefore no user data. One way to solve the problem of knowing who is connected to your web socket is by parsing and decoding the cookie that contains the passport session then deserializing it to obtain the user object. So you had to add passport.socketio, connect-mongo, and cookie-parser as dependencies and require them as passportSocketIo, MongoStore, and cookieParser respectively. And also, you need to initialize a new memory store, from express-session which was previously required. So this was the code that was needed to be added to the server.

const MongoStore = require('connect-mongo')(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });

io.use(
passportSocketIo.authorize({
cookieParser: cookieParser,
key: 'express.sid',
secret: process.env.SESSION_SECRET,
store: store,
success: onAuthorizeSuccess,
fail: onAuthorizeFail
})
);

So the problem the server gave me an error saying 'Class constructor MongoStore cannot be invoked without 'new'. Which was something that I did not understand why was causing this error because I did what they said in the challenge and clicked on a section in the challenge where it said 'If you're running into errors, you can check out the project up to this point here' to see if maybe I did something wrong but I could not see what was the problem. So I research the error and found out I was not supposed to call the session when declaring the MongoStore so in my app.use middleware I passed the MongoStore.create which tells the app that a session has been created in the method passed an object with key mongoUrl which is a connection string for creating a new MongoClient connection. If the database name is not present in the connection string, the database name should be provided using the database name option. And as a value passed the MONGO_URI which is saved in the env file.

### Solution code

const MongoStore = require('connect-mongo')

app.use(
session({
secret: process.env.SESSION_SECRET,
resave: true,
saveUninitialized: true,
cookie: { secure: false },
key: "express.sid",
store: MongoStore.create({ mongoUrl: URI }),
})
);

## Conclusion

In conclusion, I have seen that as a coder you need to do your research to find the solution to the problem because even platforms like freecodecamp can make mistakes.
