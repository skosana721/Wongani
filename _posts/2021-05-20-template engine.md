---
Layout:
Title: "Template engine"
date: 2021-05-20
---

## Introduction

I will share about setting up a template engine with freecodecamp under the advance node and express

## Body

The first thing you would ask yourself is what is a template engine?

So a template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values and transforms the template into an HTML file sent to the client.

### Add a template to express

In freecodecamp was required to add a pug as a dependency in the package.json file.

dependencies": {

    "pug": "3.0.0",

},
And in the express server file required the pug dependency

const pug = required('pug')

So to let express know which template engine to use, I used the set method which is an express method used to assign the setting name to value. So used the set method to assign the pug as the view engine property's value

app.set('view engine', 'pug')

In the get request with a declaration of '/' route used the res.render to render the file path to the views/pug. With the use of the built-in node, the module path was able to find the path to views/pug.

app.route('/').get((req, res) => {
res.render(path.join(\_\_dirname, 'views/pug'));
});

And also template able you able to pass a variable that contains info that you would want to render on your HTML. So in your pug, you're able to reference the variable name as #{variable_name} inline with other text on an element or by using an equal sign on the element without a space such as h3=variable_name which assigns the variable's value to the h3 element's text.

## Conclusion

In conclusion, the template engine greatest feature is the ability to pass variables from the server to the template file before rendering HTML
