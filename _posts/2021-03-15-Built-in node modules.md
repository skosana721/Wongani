---
Layout:
Title: 'Built-in node modules'
date: 2021-03-15
---

## Introduction

I will share some of the built-in node modules and briefly explain what they do. 
## Body

### Os module
This module provides many functions that you can use to retrieve information from the underlying operating system and the computer the program runs on, and interact with it.

#### Syntax to require the os module

const os = require('os')

Some of the methods:

#### os.userInfo()

This method checks for the information for the current user

#### os.upTime()

This method checks for how long the computer has been operating in seconds

#### os.type()

This method checks which operating system the computer is using.

#### os.release()

This method returns the operating system release.

#### os.totalmem()

This method returns the total amount of system memory in bytes

#### os.freemem()

This method returns the amount of free memory in the system in bytes.

### Path module

The path module used for handling and transforming paths

### Syntax to require the path module
const path = require('path')

Some of the path method:

#### path.join()

This method joins all paths to create a normalized path 

#### path.basename()

This method returns the last portion of the path

#### path.resolve()

This method resolves path into absolutes path

### fs module 

The fs module provides a lot of very useful functionality to access and interact with the file system.
### Syntax to require the fs module 

const fs = require('fs')

Every method of the fs module has asynchronous and synchronous for the same method. Synchronous has the first parameter for the path which a string having the file name including path, the second parameter is called flags which indicates the behavior of the file to be opened. Also for the asynchronous methods takes a last parameter as the completion function callback and the first parameter of the callback function as error and the second is the data.

### Example of sync and async 

Sync method 

fs.readFileSync("./content/first.txt", "utf8");

Async method

 fs.readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
  });


But both methods can read the file of the specified path but the synchronous method blocks the program during its execution while the asynchronous does not do that.

## Conclusion

So from what I have learned regarding some of these node modules is that you need to have basic knowledge of them when it comes to backend development regardless that you be using frameworks like express. In conclusion regarding the fs sync and async it is better to use asynchronous instead of synchronous because the async never block the program during execution. 
