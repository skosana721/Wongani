---
Layout:
Title: "Pull request"
date: 2021-04-26
---

## Introduction

I will share a little about what I have learned when it comes to pul request.

## Body

### Pull request

Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

A pull request is related to version control systems. You may have several sets of users:

-Administrators/Owners
-Contributors
-Testers

You want each of these people to be able to do different things:

#### Administrators/Owners

These people can be trusted. They might have full access to the repository in question, including full rights to commit what they want when they want.

#### Contributors

These might be random people from the Internet; they might be lesser people in a company. Either way, you probably don't want them to be able to commit straight to the codebase - you want to review their changes first.
This is where pull requests come in. Instead of allowing straight changes to the codebase from your contributors, they will instead fork the repository, creating a copy on their local machine, and develop that. When they're done, they can create a pull request containing their updated code. Someone in the higher group can then review their changes for correctness and complicity with standards, and merge their changes if they comply.

## Conclusion

In conclusion, a pull request is necessary in a case where you are given a project as a team to work on, so each person in the team can select which part of the project he/she wants to work on because if the person is not invited as a contributor they can not push any changes to that repo.
