---
Layout:
Title: "React re-render error"
date: 2021-04-21
---

## Introduction

I will share about the problem that I have faced throughout the day which had to do with an error that was causing the react app not to run because the app re-render much time so the react had to stop it so that it does not cause an infinite loop.

## Body

This error started when I had to do the functionality for 'complete' which had to do with when I click on the complete button it should draw a line-through which would be an induction to show that it is completed. So all of a sudden the react app started throwing an error which that error inducted that the error was coming from the redux actions and the action which was causing the problem was the getEmployees action and the problem was the dispatch. So tried adding the dependency to the useEffect where I was dispatching the getEmployee action but it did not work and kept on throwing the same error.

So I did some debugging to see what was causing the problem some I try commenting out the dispatch in the useEffect and when I did that the app would work but the app was not able to display the data from the server. So for me to solve the problem I had to call Moral to come and help me after suffering for several hours trying to fix this which is included searching the web for a possible solution, so what Moral did debug through commenting out some of the code he thought might be causing the problem also to find out that the problem was being caused by the functionality which had to do with complete. The problem was caused by me trying to setComplete method with a function a name which was 'completed'.

## Conclusion

In conclusion, I would say that it would have been easier for me to find the problem if only the chrome browser was specific about what was causing the error but the error it showed was not even relevant to what was the real problem.
