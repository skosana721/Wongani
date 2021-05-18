---
Layout:
Title: "Adding time feature and context api"
date: 2021-05-18
---

## Introduction

I will share about adding a feature that enables you to see the time after submission of your daily report on the tcg-student-tracker app and will share about the context api which Moral said that we should look at because it was used in the tcg-student-tracker app.

## Body

So the time in the app is added automatic and the time is added when the form progress form is being submitted to the firebase and When mapping data the time is being displayed in the table both for view progress and view Students Progress. And functionality was done working MomentJS package. MomentJs is a JavaScript library that helps in parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.

### Context API

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.

So using context api you need to create a file for the data that you want to used globally in your app and function a and that function return context that you want to pass and wrap your children prop with it and component takes a value as a prop which is what you want to other components in your app to access and wrap you app component with your context some the whole app you can be able to access the data without prop drilling.

import React, { useContext, useState } from "react";

// creating a context api
const FormStateContext = React.createContext();
const HandleChangeContext = React.createContext();
const HandleSubmitContext = React.createContext();

// custom hooks to use your context api global
export const useFormState = () => {
return useContext(FormStateContext);
};
// custom hooks to use the handleChange
export const useHandleChange = () => {
return useContext(HandleChangeContext);
};
// custom hooks to use the handleSubmit

export const useHandleSubmit = () => {
return useContext(HandleSubmitContext);
};
export function GlobalState({ children }) {
const [form, setForm] = useState({
name: "",
surname: "",
job: "",
});
const handleChange = (e) => {
const { name, value } = e.target;
setForm({ ...form, [name]: value });
};
const handleSubmit = (e) => {
e.preventDefault();
if (form.name && form.surname && form.job) {
console.log("form", form);
}
};
return (
<FormStateContext.Provider value={form}>
<HandleChangeContext.Provider value={handleChange}>
<HandleSubmitContext.Provider value={handleSubmit}>
{children}
</HandleSubmitContext.Provider>
</HandleChangeContext.Provider>
</FormStateContext.Provider>
);
}

## Conclusion

In conclusion, So I'm waiting for Moral to just review the feature and give me feedback. So context api I would say can be good for small react application.
