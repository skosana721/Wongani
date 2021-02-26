---
Layout:
Title: "Express server"
date: 2021-02-26
---

## Introduction

I will share about what I have learned for the week in regards to express

## Body

So this week has been some little bite of express server and trying to understand some to it concepts like routing API 'routes'.

### What is express?

Express is a Node.js framework for creating the server-side forJavaScript app and is one of the popular Node backend frameworks. The reason for express's popularity is because it requires minimal setup to start an application or API and is fast, and it does not have a strict way of how application or API can be built.

#### Installation of express package

npm install express --save

### Some of the advantages of using express?

- It allows you to build a single page, multi-page, also can work its multiple platforms and even mobile application. And also provides an API for the frontend.

-It supports MVC (Model-View-Controller). The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components the mode, the view, the controller.

- It is only a cross-platform so it not limited to one platform

- It leverages upon Node.js single-threaded and asynchronous model.

#### Building an express server

const express = requires('express')
const app = express()
const PORT = 5000

app.get('/'(req, res)=>{
res.send('Hello express)
})

app.listen(PORT, ()=> `Server is running on port ${port}`)

The first line in the server 'requires' express from the express module and in the second line you are just assigning express to the app variable and the third line is where you set the port for the server. The app. get is a function that tells the server what to do when a given route is called. The callback function (req, res) listens to the incoming request 'req' object and responds accordingly using the 'res' response object. The app.listen function listen to the port which the server is running on.
And to run the server you need to run the command (node FileName.js).

### Routing

Routing refers to how a server-side application responds to a client request to a particular endpoint. This endpoint consists of a URL and HTTP methods such as GET, POST, PUT, DELETE, etc.

Route structure

app.Method(PATH, HANDLER)

- app is an instance of express
- METHOD is an HTTP request method
- PATH is a path on the server
- HANDLER is the function executed when the route is matched.

GET request

app.get('/'(req, res)=>{
res.send('Hello express)
})

PUT request
app.put('/user'(req, res)=>{
res.send('Got PUt request /user')
})

DELETE request

app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user')
})

POST request

app.post('/', function (req, res) {
res.send('Got a POST request')
})

## Conclusion

In conclusion, those are some of the things that I understand when it comes to server-side I have been watching some youtube videos and doing the freecodecamp basic Node and Express challenges, slowly but surely I'm getting there.
