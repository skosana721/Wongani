---
Layout:
Title: "LocalStorage limitation"
date: 2021-03-03
---

## Introduction

I will share about the problem I had to regard using localStorage to state in redux-persist where if I reload the page the values would be lost, which showed that the redux-persist was not working.

## Body

So a little about what localStorage is and What it is used for.

LocalStorage is a read-only property that allows you to access the web storage, web applications that you can store data locally within the user's browser.LocalStorage is used to store data locally on the web. And depending on the browser the size is different but chrome is 5MB which the browser that I'm currently using.

For me to solve the problem which was causing the redux-persist not to work, I would to do some research and understand localStorage and find out the max size of the chrome localStorage but to only find out that the problem was not redux-persist it was because of an image that I was uploading to localStorage which was causing the problem the size of the image was too big so it to be saved in localStorage.

## Conclusion

This problem showed me that there are use cases for localStorage and its downfall which are that the is a limitation to the size of data that you can store in the localStorage and that is where the backend comes in.
