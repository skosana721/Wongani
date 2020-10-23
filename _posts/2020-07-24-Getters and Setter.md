---
Layout: 
Title: "Getters and Setters function"
date: 2020-07-24
Categories:
---

# Introduction

Today I will share about getter and setter functions.

# Body

## Property getter and setter

There are two kinds of object properties.

The first kind is the data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

The second type of property is something new. It’s accessor properties. They are essentially functions that execute on getting and setting value but look like regular properties to an external code.

## Getter function

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

## Setter function

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

## Getters and setters
Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by getting and set:

### Accessor descriptors

Descriptors for accessor properties are different from those for data properties.

For accessor properties, there is no value or writable, but instead, there are get and set functions.

That is, an accessor descriptor may have:

get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.

## Smarter getters/setters

Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

For instance, if we want to forbid too short names for the user, we can have a setter name and keep the value in a separate property _name:

# Conclusion

I had a problem with "Use getters and setters to control access to an object" at freecodecamp which required me to create a class Thermostat, and I had to convert Fahrenheit to celsius, but converting was the problem, I did some research and watched some videos to understand converting Fahrenheit to celsius with JavaScript. 