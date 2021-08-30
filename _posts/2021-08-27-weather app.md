---
Layout:
Title: "Weather app"
date: 2021-08-27
---

## Introduction

I share about the weather app that I was busy with today

## Body

So the weather app is an application that gets the current weather based on the location you are at. So when the user first opens the app the browser will prompt a message saying to the user if they want the browser to access their current location. To do this I added a window: load event which is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading. And in the load event created an if statement which checks the navigator.geolocation and the navigator.geolocation is a read-only property that returns the Geolocation object that gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location. And the longitude and latitude that are returned in the Geolocation object are assigned to variables. And dispatched the longitude and latitude coordinates to an api in the redux action which uses the longitude and latitude to return the weather for that current location.

## Conclusion

In conclusion, so creating this application made me learn a lot and also know to properly do an api call.
