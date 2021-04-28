---
Layout:
Title: "Git branches"
date: 2021-04-28
---

## Introduction

I will share about git branches and why it is important to use them as a developer.

## Body

### Git branches

Using git branches is a great way to work with our application while tracking its versions. In general git branches help us have multiple versions of an application organized.

Using git branches

### git branch

- List all of the branches in your repository. This similar to git branch --list

### git branch <branch name>

- This is used to create a new branch if the is no branch available

### git checkout <branch name>

This is used to switching between branch if the is more than one

### The importance of using git branches

- It is possible to develop new features for our application without hindering the development in the main branch.

- With Git branches it is possible to create different development branches that can converge in the same repository. For example, a stable branch, a test branch, and an unstable branch.

So everything you do outside of the master branch will not go into production and all the code will only be available to the that partial branches this prevents bugs from being push to the master branch.

## git merge <branch>

Merging branch has to do with combining code from the branch you created to master. Merging branch can help when you are down with the branch and want the doe to integrate into another branch code.

## Conclusion

In conclusion, knowing about git branches is helpful because it can save you a lot of time by not push buggy code to production and it can make it easier to debug the application if they are any problem because you would know which branch might have created the debug.
