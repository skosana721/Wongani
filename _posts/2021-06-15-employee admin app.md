---
Layout:
Title: "Employee admin app"
date: 2021-06-15
---

## Introduction

I will share about the task that Moral gave that has to do with creating an administration application for employees.

## Body

So the application has a form that contains input for name, surname, id number, job position and salary and the app is supposed to have two pages one for the form and one for displaying the employee's information in a table format. For every employee in the table there you should be a button which is responsible for calculating the annual salary for that employee and also the ability to be able to update the surname if the employee changes it, job position if they get a promotion, and also the salary if they get a raise. And the id number that is being entered should be validated to check if the entered id number is a valid South African number.

So I did some research on the South African id number to find what do all those 13 numbers meaning and this is my findings.

- The first 6 digits (YYMMDD) are based on your date of birth. eg '980421' the first two being the year and middle two being the month and the last two being the day.

  -The next 4 (SSSS) are used to define your gender. Females are assigned numbers in the range 0000-4999 and males from 5000-9999.

- The next digits (c) shows if you're a South African citizen. The status with 0 denoting that you were born a SA citizen and 1 denoting that you're a permanent resident.

- The last digit (Z) is a checksum digit – used to check that the number sequence is accurate using a set formula called the Luhn algorithm.

## Conclusion

In conclusion, I would that a lot of the functionality would be simple to do because I am now familiar with them but the only problem that I would have is validating the id number simply because I am not that knowledgeable with regex.
