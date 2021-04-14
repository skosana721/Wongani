---
Layout:
Title: "Learning about validation"
date: 2021-04-14
---

## Introduction

I will share what I have learned during the course day regarding validating input data to check if the request data that you are receiving is the type of data that you have defined in the schema.

## Body

So for the day, I was busy doing a watching tutorial that had to do with validating data with the express server. During the process of learning, I encounter a problem that my API was not working when I was testing them with postman and something that I did not understand was that expressly did not throw any errors or MongoDB I tried debugging the situation to see what did I do wrong but could not find any problems. I even called Njabulo to help me try and find where I went wrong but still both of us could find what was the problem.

So I just decided to remove all the code in the express server and also in the user routes and started writing the code again to see if I would get the same problem as before but this time it worked. So what I learned regarding validation had to do with an npm package called @hapi/joi which is used for input validation, path parameters, query parameters, and payload parameter.

### Joi

Joi is an object schema description language and validator for JavaScript objects. Joi allows you to create blueprints or schemas for a JavaScript object to ensure the validation of key information. To get started with joi, you must first install and add it as a dependency to your project:

In my case, I only did input validation

#### User Schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
name: {
type: String,
require: true,
min: 4,
max: 20,
},
email: {
type: String,
require: true,
min: 7,
max: 200,
},
password: {
type: String,
require: true,
min: 6,
max: 1500,
},
Date: {
type: Date,
default: Date.now,
},
});
let user = mongoose.model("User", userSchema);
module.exports = user;

#### Validation req.body with Joi

const schema ={
name: Joi.string().min(4).require(),
email: Joi.string().min(7).require().email(),
password: Joi.String().min(6).require()
}
const validation = Joi.validate(req.body, schema)

## Conclusion

In conclusion, I am thinking of using Joi in some of my projects next time when I have a full understanding of how it works.
