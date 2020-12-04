---
Layout: 
Title: "function"
date: "2020-09-04"
Categories:
---

## Introduction

I'm going to talk about the react life cycle methods.
## body

### What are react lifecycle methods?

React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods or lifecycle hooks, and allow you to catch components at a certain point in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on.

Most used lifecycle methods:

### render()

The render() method is the most used lifecycle method which you will only see in the React class-based components. The render() method returns JSX that is displayed in the UI and it can also return a null if there is nothing to render for that component.

### componentDidMount()

componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls if you need to load data from a remote endpoint.

On the exercise that moral gave of finding the students average, and top student. The data that was submitted was stored in localStorage and I used componentDidMount() to get the data stored in localStorage when the app loaded and the reason for doing that was because if I tried map without using method componentDidMount() the console would throw an error saying that "TypeError: Cannot read property 'map' of null". To solve my problem that is when I had to implement componentDidMount().

My solution:

 componentWillMount() {
    let storedData = JSON.parse(localStorage.getItem("storedData"));
    if (localStorage.getItem("storedData")) {
      this.setState({
        name: storedData.name,
        mark: storedData.mark,
      });
    } else {
      this.setState({
        name: "",
        mark: "",
      });
    }
    
  }

  componentDidUpdate()

  This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate method is updating the DOM in response to prop or state changes.

  componentWillUnmount()

  componentWillUnmount() lifecycle method is called just before the component is unmounted and closed. If there are any cleanup actions that you would need to do, this would be the right spot.

  ## Conclusion

  In conclusion, doing daily JavaScript and react practice is helping me to know the thing that I did not know and also I am noticing a change in mindset when I am faced with a problem. 