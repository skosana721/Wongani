---
Layout:
Title: "React-hooks"
date: 2021-02-22
Categories:
---

## Introduction

I will share the knowledge I have some far about react-hooks

## Body

### What are react-hooks?

react-hooks are functions that let you use React state and lifecycle features from functional components. Hooks don't work inside classes - they let you use React without classes.

### why the transition to hooks?

Before Hooks, there was no way of using the state on a functional component. This means that if you have created a functional component that suddenly needs to store stare, you are forced to do refactoring your functional component into the class component. The for the transition to hooks was because hooks made it easy to reuse stateful logic between components.

### Example of react-hooks:

#### useState

useState allows you to add React state to a functional component.

syntax

const [count, seCount] = useState(0)

- the count is the state which initial has the value of 0
- the setCount is the function that updates the state.

#### useEffect

useEffect is used for data fetching, setting up a subscription, and manually changing the DOM in React which sum-up all lifecycle method e.g componentDidMount, componentDidUpdate, and componentWillUnmount

syntax

useEffect(()=>{
console.log('App re-rendered')
})

## Conclusion

In conclusion, I would say that transition from class component to functional component has made me understand react more and it has also increased my workflow
