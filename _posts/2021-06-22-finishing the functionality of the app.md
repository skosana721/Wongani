---
Layout:
Title: "Finishing the functionality of the app"
date: 2021-06-22
---

## Introduction

I will share about fixed the problem of the employee admin not re-rendering now update the value

## Body

So for me to find the solution to the problem of what was causing the app not to re-render was because in the useEffect in the DisplayEmployee component I was supposed to pass in a dependency to cause the app to re-render and the dependency that I passed was dispatch so for every time a post and put request I made the app would dispatch the get request. And also I was able to add functionality to calculate the annual salary for every employee so how I did it was that in the DisplayEmployees component created a function called calculateAnnualSalary that take in an id as it's a parameter and looped through the employees' array and added a condition to check if the id from the parameter matches the id of any of the employee if the array and if it does select the salary of that employee and multiped it by 12 and assigned it to a variable called result and outside the for loop function updated the annual state with the result variable. So when the annual button is clicked the annual salary would be displayed below the table and added pagination to the app so that the could be a page for the form and the page that is responsible for display the employees in a table format.

### Solution to the app re-render

useEffect(() => {
dispatch(getEmployees());
}, [dispatch]);

### Solution for the calculateAnnualSalary

const calculateAnnualSalary = (id) => {
let result;
for (let i in employees) {
if (employees[i].\_id === id) {
result = employees[i].salary \* 12;
}
}
setAnnual(result);
};

## conclusion

In conclusion, I am done with the functionality of the app so far so what I think is left is to add styling to the app just to make the app look eye-catching for users.
