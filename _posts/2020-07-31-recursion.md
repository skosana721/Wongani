---
Layout: 
Title: "Recursion"
date: 2020-07-31
Categories:
---

# Introduction

I will share what I have learned regard JavaScript recursion. 

# Body 

## What is Javascript recursion?

Recursion is when a function calls itself until someone stops it. If no one stops it then it'll recurse (call itself) forever.

Recursive functions let you perform a unit of work multiple times. This is exactly what for/while loops let us accomplish! Sometimes, however, recursive solutions are a more elegant approach to solving a problem.

## Recursive approach

function countDownFrom(number) {
    if (number === 0) {
        return;
    }

    console.log(number);    
    countDownFrom(number - 1);
}

countDownFrom(5);
// 5
// 4
// 3
// 2
// 1

This function takes one parameter called the number and logs everything from number to 0.

## Infinite Recursion

Recursion also presents the same danger. It's not hard to write a self-referencing function that'll crash your browser.

🚨THIS RUNS FOREVER, BE WARNED🚨

function run() {
    console.log('running');
    run();
}

run();
// running
// running
// ...

Without a stopping condition, the run will forever call itself. You can fix that with an if statement.

# Conclusion

We had a test on Thursday where it had to do with using JavaScript recursion, but I found that the test was hard because it showed me that when it comes to using recursion i did not know how to use them, so did I to watch some tutorial and read about recursion little bit.