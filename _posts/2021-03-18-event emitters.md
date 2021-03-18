---
layout:
Title: "Event Emitters"
date: 2021-03-18
---

## Introduction

I will share about event emitters

## Body

### What is EventEmitter?

EventEmitter is a class that helps us create a publisher-subscriber pattern in Nodejs.EventEmitters work in the same way that javascript in the browser would handle events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

### Syntax to create EventEmitter

const EventEmitter = require('events')
const eventEmitter= new EventEmitter()

In the code at the first line, you require the events node module as a variable EventEmitter. In the second line you creating an instance of a new class which is eventEmitter.

By creating the eventEmitter class you have access to on and emit method.

### emit method

- emit is used to trigger an event

### on method

- on is used to add a callback function that's going to be executed when the event is triggered.

eventEmitter.on('response', ()=>{
console.log('Data received')
})

eventEmitter.emit('response')

So when the handler is triggered you get the console.log, so if you don't pass the same string in the emit handler it will not work.

## Conclusion

In conclusion, this is the little knowledge that I have learned so far when it comes to eventEmitter
