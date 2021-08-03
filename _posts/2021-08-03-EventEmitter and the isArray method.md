---
Layout:
Title: "EventEmitter and the isArray method"
date: 2021-08-03
---

## Introduction

I will share about complete the advance node and express section in freecodecamp

## Body

So this far I have less more understand when we talk about authentication. Learned EventEmitter which is a module that facilities communication between the object in Node. EventEmitter is at the core of Node asynchronous event-driven architect. So the concept of using an emitter is quite simple all you need to do is name the emitter event and registering and registering listener functions

### Creating EventEmitter

const myEmitter = new EventEmitter();

function example() {
console.log('an event occurred!');
}

myEmitter.on('eventOne', example);

### invoking the emitter

myEmitter.emit('eventOne')

And also learned about an array method called isArray() which is a method that determines whether the passed value is an Array and returns a boolean.

### Syntax

Array.isArray(value)

e.g

Array.isArray(['Tony', 'mark']); // true
Array.isArray({ name:'Steven'}); // false

## Conclusion

In conclusion, so learned something new like the isArray method which I did not know about a while ago and the advanced node and express section made to understand the use of emitters.
