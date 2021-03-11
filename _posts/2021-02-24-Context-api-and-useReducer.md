---
Layout:
Title: "Context api and useReducer hook"
date: 2021-02-24
Categories:
---

## Introduction

I will share about context API and useReducer and how using them together can be an alternative for redux for a smaller app.

## Body

As it is known that the Redux library is used to maintain/handle the global state. So maintaining and handling all that data in all those react components becomes easier, as you have only one main source to interact with. When you make any changes in the store, the changes are felt throughout all the components. And also with redux, there is a little learning curve, which has to be considered while working with Redux, like you have to know what are reducers, dispatchers, action creators and if you will be working with APIs then you need to also add middleware like Redux-Thunk. Which can be confusing for beginners and also be unnecessary for a small app.

### What is Context API?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.

You can set up a context instance using the createContext function in React, which can be deconstructed to an object which is has a provider and consumer key in it, but the consumer is no longer needed nowadays.
So you can pass the provider the same way you pass it in redux and pass a value as a prop which you can pass state, method props, etc.

#### Example's context api / useContext

import React, { useState,useContext } from 'react'
import { data } from "../../data";

const AppContext = React.createContext()
function ContextApi () {
const [people, setPeople] = useState(data);
const removePerson = (id) => {
setPeople((people) => {
return people.filter((person) => person.id !== id);
});
};
return (
<AppContext.Provider value={{removePerson}}>

<h2>Context-Api/ useContext</h2>
<List people={people}  />
</AppContext.Provider>
);
}

### What is useReducer?

The useReducer is a hook I use sometimes to manage the state of the application. It is very similar to the useState hook, just more complex. It acts as an alternate hook to the useState hook to manage a complex state in your application.

The useReducer hook uses the same concept as the reducers in Redux. It is a pure function, with no side-effects. The function always returns the same output if the same arguments are passed in.
The function does not produce any side-effects.

#### Syntax for useReducer

const [state, dispatch] = useReducer(reducer, initialState, init);

Both useContext and useReducer can be an alternative to redux without having to install packages and also remove the confusion that comes with redux if you only planning on building a small application.

### Conclusion

The useContext and useReducer make it easier to have our global and app-wide data available to all components, therefore, making it easier and more accessible. But I don't think that those two can replace redux is just that they have their use cases.
