---
Layout:
Title: "Chain search query"
date: 2021-08-10
---

## Introduction

I will share about freecodecamp challenge about 'Chain search query helpers to narrow search results

## Body

In this challenge, I was required to modify the 'queryChain' function which is responsible for finding people based on their favorite food which is specified by the variable named foodToSearch. Which I was supposed to sort them by 'name', also limit the results to two documents, and hide their age. So to pass this challenge I was suppose to chain find(), sort(), limit(), select() and then exec().

### Solution

const queryChain = (done) => {
const foodToSearch = "burrito";
Person.find({ favoriteFoods: { $all: [foodToSearch] } })
.sort("name")
.limit(2)
.select({ age: 0 })
.exec((err, docs) => {
if (err) return done(err);

      done(null, docs);
    });

};

Added the find() method to the Person model to search for people who contain 'burrito' as their favoriteFoods and the find() method returns all objects that contain the query and used the sort() method to sort the objects based on their 'names' in ascending order. The limit() method limits the number of documents that are the return of the database based on a number that is passed to the parameter. The select() method select the specific field to include in the documents so passing {field: 1, age: 0} the 1 passed means that it should be included and 0 means that it should be excluded. The exec() method is used to execute the query.

## Conclusion

In conclusion, this challenge taught that you can return documents without returning certain fields by using the select() method and also limiting the number of documents you want with limit() method.
