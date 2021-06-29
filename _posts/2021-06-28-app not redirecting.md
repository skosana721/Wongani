---
Layout:
Title: "App not redirecting"
date: 2021-06-28
---

## Introduction

I will share about the problem where the app was not able to redirect you to the displayEmployees component and this was supposed to happen when the was no errors

## Body

So I tried to use the useHistory which is imported from react-router-dom but it did not work and only gave me an error. So that was now I said Moral for help, he said me to create a file by the name history.js which in that file import createBrowserHistory from history. The createBrowserHistory manages the page navigation as per the browser Preference. The history for the forward and go-back buttons on the top of the browser can be managed through this package. And I assigned the createBrowserHistory method to a named export which had a const variable named history.

### History file

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

And in the App component, I imported the history from the history file which is where I set up my routing. So on the router component passed the history as props named history.

### Passing history as a prop

 <Router history={history}>
        <NavBar />
         <Switch> 
        <Route path="/" exact component={(props) => <Home {...props} />} />
        <Route
          path="/EmployeeForm"
          exact
          component={(props) => <EmployeeForm {...props} />}
        />
        <Route
          path="/displayEmployees"
          exact
          component={(props) => <DisplayEmployees {...props} />}
        />
         </Switch> 
      </Router>

And in the actions import the history from history and used history.push('/displayEmployees') to redirect to the DisplayEmployees component this was used in the addEmployee when called the post request in the server.

### Using the history.push

import {history} from 'history'

export const addEmployee = (form) => {
return (dispatch) => {
history.push("/displayEmployees");
axios.post("http://localhost:5050/employee", form).then((res) => {
dispatch({
type: ADD_EMPLOYEE,
payload: res.data,
});

    });

};
};

And also in the useForm custom hook created a state for isSubmitted which initial is false and when you click the submit the isSubmitted is set to true and in the useEffect where I check if the are no errors I also added the isSubmitted to the condition to be check.

### Passing the isSubmitted in the useEffect

useEffect(() => {
if (Object.keys(errors).length === 0 && isSubmitted) {
dispatch(addEmployee(formInfo));
setFormInfo({
name: "",
surname: "",
idNumber: "",
position: "",
salary: "",
});
}
}, [errors]);

## Conclusion

In conclusion, So that was how I was able to solve the problem that I having and if it wasn't for Moral I don't think that I would be able to solve it and I did some research to see if I was doing something wrong but all the solution that I found were the same as the one that I implemented.
