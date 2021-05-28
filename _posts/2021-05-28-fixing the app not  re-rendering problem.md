---
Layout:
Title: "Fixing the app not re-rendering problem"
date: 2021-05-28
---

## Introduction

I will share about yesterday's problem I have been having where the app was not re-rendering when I delete a request to my backend

## Body

First, the reason that the app was not re-render was that I did not change the state that was responsible for displaying the data which was the recipeList so when I was doing any action in the frontend I was only updating the backend but not the frontend, which happens because I was only spreading the state in redux and not modified the recipeList when a certain actionType is called in the redux. So the only thing that I did was to modify the recipeList based on which actionType is called.

And also I was able to finish with the app's functionality which has to do with creating, reading, updating and also deleting data both on the frontend and backend. So the only thing that I am left with is to style the app and maybe add some personal functionality that I would like the app to have because when I am done with what Moral wanted the app to do.

## Conclusion

In conclusion, from now on I will start doing work that I am given as quickly as possible to be able to see mistakes and also review my code and try to find if the is code that is useless or modified my code if possible.
