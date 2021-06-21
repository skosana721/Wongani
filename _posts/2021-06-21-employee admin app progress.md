---
Layout:
Title: "Employee admin app progress"
date: 2021-06-21
---

## Introduction

I will share the progress with the employee admin app

## Body

So far the employee admin app can to added new employee info and it calls to display the employee in a table and also added an edit button which opens a modal that has a form that shows the surname, position, and salary of a particular employee which the input fields are pre-filled the current employee info so the input fields can be updated if wanted and when submitting the form the modal closes. So the problem is that after submitting the new info the app doesn't re-render so that it can display the updated info so this is something preventing me from adding the functionality to calculate the annual salary for a given employee.

And also did a kata that has to do with a check for factor. The function tests if the factor is a factor of base and returns true if it is a factor or false if it not. A factor is a number that you can multiply together to get another number. You can find a fact by dividing numbers. If the remainder is then the number is a factor. So the function takes two parameters which are a base, factor and to solve it I just used the mod operator to check if the factor is 0.

### Solution

function checkForFactor (base, factor) {
return base%factor===0
}

## Conclusion

In conclusion, so tomorrow I would checks what is preventing the app from re-rendering when I update the surname, position, and salary.
