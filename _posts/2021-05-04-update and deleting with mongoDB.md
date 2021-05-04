---
Layout:
Title: "Updating and deleting with mongoDB"
date: 2021-05-04
---

## Introduction

I will share about the mern stack todo app and some of the problem that I have been facing during the day.

## Body

So the todo mern stack app I was given some time ago but there are some of the things that I did not do like the edit and delete button. But for the delete button some problems with it because it was not deleting and it capped throwing and could not find what the problem was so I called Moral to try and show me where did I go wrong and the problem was that I was not passing the id of the object that I want to delete in the deleteOne method. And for edit created input and passed the value as todo which grabs the current todo and dispatched the id and the updated value to the backend and in the route created a put request. So the problem was I did not know which method to use because I have never updated with MongoDB so I said Moral for some clue and he refers me to check the MongoDB method called updateOne. The updateOne updates a single document within the collection based on the Filter.

### syntax

db.collection.updateOne(filter, update)

The first argument where you pass the id for the object that you want to select and the second argument is for the value want to update with. In my case, I passed the req.params.id to select the object that wants to change and passed the req.body.edit which I required from the frontend.

## Conclusion

In conclusion, I think that would say now I understand the basic when it comes to express, MongoDB and CRUD. At this point, I think that I can see the light regarding the CRUD, some when I would say now I should start learning authentication.
