---
Layout:
Title: "Freecodecamp not connecting to mongoDB"
date: 2021-06-03
---

## Introduction

I will about the freecodecamp problem that I have been having which has to do with freecodecamp not being able to connect to MongoDB.

## Body

So was doing implementing the serialization of a Passport user in Advanced Node and Express so the challenge has to do with connecting to the MongoDB database which will start when the server runs and keep the persistent connection for the full life-cycle of the app. And the MongoDB connection string is kept in the environment variable which is named MONGO_URI and when the database is connected the app will be listening for a request which the purpose of not allowing requests before our database is connected or if there is a database error. So to do this we are required to encompass the serialization in the app.

### Using serialization in the app

myDB(async client => {
const myDataBase = await client.db('database').collection('users');

// Be sure to change the title
app.route('/').get((req, res) => {
//Change the response to render the Pug template
res.render('pug', {
title: 'Connected to Database',
message: 'Please login'
});
});

// Serialization and deserialization here...

passport.serializeUser((user, done) => {
done(null, user.\_id);
});
passport.deserializeUser((id, done) => {
myDataBase.findOne({ \_id: new ObjectID(id) }, (err, doc) => {
done(null, doc);
});
});

// Be sure to add this...
}).catch(e => {
app.route('/').get((req, res) => {
res.render('pug', { title: e, message: 'Unable to login' });
});
});

So only one test passes and the other one does not pass which shows an error saying 'Database connection should be present.' but then I check the connection string I do not see any problem with it. I have even tried to watch so video where people are doing the same challenge as me theirs are passing while I am not.

## Conclusion

In conclusion, I think the problem has to do with replit which is an online IDE because it seems that replit can't find the variable in the .env file and I have tried to check for any mistakes in the .env and I can't find any.
