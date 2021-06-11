---
Layout:
Title: "React form validation"
date: 2021-06-11
---

## Introduction

I will share about react form validation

## Body

Today I was practising validating input in the frontend so was something I was able to do but I could not do it when it comes to validating every single input in my react app. So created the Form component which was responsible for displaying the form which had inputs for username, email, password and confirms password. And all my functionality for handling change, submission, and state where store in a custom hook called 'useForm'. Custom Hooks are a process to reuse stateful logic, but every time you use a custom Hook, all state and effects inside of it are fully isolated. A custom Hook is a JavaScript function whose name starts with 'use' and that may call other hooks and it can be used to share logic between components.

### custom hook

import { useState, useEffect } from "react";

const useForm = (validate) => {
const [values, setValues] = useState({
username: "",
email: "",
password: "",
confirmPassword: "",
});
const [errors, setErrors] = useState({});
const handleChange = (e) => {
const { name, value } = e.target;
setValues({ ...values, [name]: value });
};
const handleSubmit = (e) => {
e.preventDefault();
setErrors(validate(values));
};
useEffect(() => {
if (Object.keys(errors).length === 0) {
console.log(values);
setValues({
username: "",
email: "",
password: "",
confirmPassword: "",
});
}
}, [errors]);
return { handleChange, values, errors, handleSubmit };
};

export default useForm;

So the useForm custom hook had the logic for handleChange , HandleSubmit , state for the form values, and errors.

So validating the inputs I created a component validateInfo that had a JavaScript function with a parameter of values and in the function block, the created variable errors which initial is an empty object. And add a condition that checks in values.username is false and if it is add a key-value "username: 'Username is required" and checked if the input for the email is empty and if it is added key-value to add errors object which is' email: "Email is required"' and also did the same for the password and also add validation that the password length should be greater than 6 characters and for the confirm password I compared the values.password with values.confirmPassword and if not return an errors saying that "Passwords don't match".

## Conclusion

In conclusion, after implementing a custom hook in my react app I have to see that custom hook make manage your components easier and also simple to pass stateful logic to your components.
