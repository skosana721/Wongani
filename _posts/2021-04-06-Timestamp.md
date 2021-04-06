---
Layout:
Title: "Timestamp"
date: 2021-04-06
---

## Introduction

I will share about the timestamp project on freecodecamp that has been giving me a problem. The timestamp project requires me to build require to a route '/api/timestamp/:date?' which returns JSON object with a UNIX key that is a Unix timestamp of the input date in milliseconds and also should return the JSON object with a uct key that is a string of the input date in the formate: Thu, 01 Jan 1970 00:00:00 GMT. And if the input is invalid the should return an object {'error': 'Invalid Date'}. An empty date parameter should return the current time in a JSON object with a unix key and utc key.

## Body

So far I'm managing to get some of the things to pass like return an object with unix key and utc key if the request matches the request '/api/timestamp/:date?' but I'm currently failing to validate the date. So I have done some research on the day object to try and come up with a solution. Some of the things that I have learned when it comes to the date object.

### Date object

Date object represents a single moment in time in a platform-independent format. An object contains a Number that represents milliseconds

### Constructor for the date object

-Date()
When it is called a method returns a string as a representation of the current date and time

- new Date()
  When is called as new Date() constructor which returns a new Date object which comes with many methods

## Conclusion

In conclusion, I haven't been able to complete the freecodecamp project so I was thinking of going and doing some more research on the date object and also revisit the express challenges on freecodecamp.
