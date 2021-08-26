---
Layout:
Title: "Private routes"
date: 2021-08-25
---

## Introduction

I will about creating a private route to protect components that users can only access when they are authorized

## Body

So when a user tries to register and the is no errors found an actionType of REGISTER_SUCCESS will be dispatched and a token would be signed to the user and the server will send a response with a JSON object that contains the token and the user object and the same is done when the user tries to log in but this time the actionType would be LOGIN_SUCCESS if the is no errors found which is response is send to the frontend. So in the frontend created a folder called routes and inside the folder created a component called PrivateRoute. This component imports the Redirect and Route components from react-router-dom. This component returns the Route component and in the render, method added a condition that checks the localStorage if the is a token and if the is a token in the localStorage it will render the component that I want to protect from users that don't have authorization and else the user will be redirected to the registration form.

## Conclusion

In conclusion, tomorrow I will be testing if my PrivateRoute component works in the way that I want it to and if it does not work the way I want it to I had to modify the PrivateRoute.
