---
Layout:
Title: "Registering new user with passport and password hashing"
date: 2021-08-02
---

## Introduction

I will share some freecodecamp challenges that I have been doing today.

## Body

### first challenge 'Registration of new users'

So the logic of the registration routes was as follows:

- Registration of the new user
- Authenticate the new user
- Redirect to /profile

The logic of step 1, registering the new user, should be as follows: Query database with a findOne command, if a user is returned then it exits and redirect bak to home OR if the user is underlined and no error occurs then 'insertOne' into the database with the username and password, and, as long as no errors occur, call next go to step 2, authenticating the new user.

app.route('/register')
.post((req, res, next) => {
myDataBase.findOne({ username: req.body.username }, function(err, user) {
if (err) {
next(err);
} else if (user) {
res.redirect('/');
} else {
myDataBase.insertOne({
username: req.body.username,
password: req.body.password
},
(err, doc) => {
if (err) {
res.redirect('/');
} else {
// The inserted document is held within
// the ops property of the doc
next(null, doc.ops[0]);
}
}
)
}
})
},
passport.authenticate('local', { failureRedirect: '/' }),
(req, res, next) => {
res.redirect('/profile');
}
);

## Second challenge 'Hashing your passwords'

Password hashing is when a password has been “hashed” which means it has been turned into a scrambled representation of itself. A user's password is taken and – using a key known to the site – the hash value is derived from the combination of both the password and the key, using a set algorithm. So to hash passwords, I was required to use bcrypt to do the password hashing.

An easy way to implement saving a hash instead is to add the following before your database logic e.g

const hash = bcrypt.hashSync(req.body.password, 12);

and replacing the req.body.password in the database saving with just password: hash

checking if the password in the database is not equal to the user.password is trying to log in.

if (!bcrypt.compareSync(password, user.password)) {
return done(null, false);
}

## Conclusion

In conclusion, the reason for hashing a password is because that it makes it hard for a hacker to find your user password if your database gets hacked.
