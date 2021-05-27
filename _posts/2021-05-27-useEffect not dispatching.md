---
Layout:
Title: "useEffect not dispatching"
date: 2021-05-27
---

## Introduction

I will share about little about useEffect and also about a problem regarding useEffect not dispatching a get request in recipe component I dispatching delete request.

## Body

### useEffect

The useEffect tell React that your component needs to do something after render. React will remember that function you passed as our 'effect', and call it later after performing the DOM updates. And also it runs both after the first render and after every update.

So the problem that I have been having was regarding the useEffect not dispatching the getRecipe action in my recipe-box app and I have tried to move the useEffect to another component but still, it does work when I click the delete button which dispatches the deleteRecipe action but I think the app does not render when clicking the button because when I add a new recipe it does the render which gets the data from MongoDB where that data is mapped in the RecipeList component and the data is passed as props to a Recipe component where the data is display on the app.

## Conclusion

In conclusion, so I was not able to solve my problem which is the one thing that is holding me from being able to finish with the functionality of the app.
