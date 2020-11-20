---
Layout: 
Title: "pass state as props"
date: "2020-11-20"
Categories:
---

## Introduction

I will share what I have learned regarding passing state as props from parent component to child props and even passing callbacks as props.

## Body

### State 

A state is an object that represents the parts of the app that can change.

### Props

Props stand for properties and are being used for passing data from one component to another. But the important part is that data with props are being passed in a uni-directional flow.

So moral gave us an exercise where we have to create an app with javascript or react, which allows students to enter their name and marks, and when you submit that form it should send the data to a list component and that component should have a button that when you click it should get the average of all the students in the list and also the app should have a component that gets the top achiever in the list.

So I chose to do the app with react while doing the app that is when I learned to pass state from my main component which the parent to child component which in this case is my form, this made me see that the effort which I am putting in redoing some of the freecodecamp challenges is paying off because the last time when we were given assignment was not able to state as props from parent to child.

Example for pass state as props:

class MyApp extends React.component{
    constructor(){
        super()
        this.state={
            name:'',
            surname:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name] = event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        
    }
    render(){
        const {name, surname} = this.state
        return(
            <div>

            <Form 
            name={name} 
            surname={surname} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            />
            </div>
        )
    }
}

class Form extends React.component{
    constructor(props){
        super(props)
    }
    render(){
        const {name, surname ,handleChange, handleSubmit} = this.props
        return(
            <div>
            <form onSubmit={handleSubmit}>
          <label name="studentName">Student Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            name="name"
            required
          />
          <label name="studentMark">Student Marks</label>
          <input
            type="number"
            value={mark}
            onChange={handleChange}
            placeholder="Enter marks"
            name="mark"
            required
          />
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
            </div>
        )
    }
}

## Conclusion

In conclusion, I may not have finished doing the work but the exercise that moral is giving us is paying off because I see that I am slowly understanding some of the things.
