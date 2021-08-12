---
Layout:
Title: "Markdown preview"
date: 2021-08-11
---

## Introduction

I will share about build a markdown preview frontend project which has to do with the markdown that is being used gitHub.

## Body

So markdown is a lightweight and easy-to-use syntax for styling all forms of wring which is being used in GitHub platform.

### What is Markdown ?

Markdown is a way to style text on the web. YOu control the display of the document; formatting words as bold o italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or \*.

You can use Markdown most places around GitHub:

- Gists
- Comments in Issues and Pull Requests
- Files with the .md or .markdown extension

### The user story for markdown preview

- User can see a textarea element with a corresponding id='editor'.
- User can see an element with a corresponding id='preview'.
- When user enter text into the #editor element, the #preview element is updated as usr type to display the content of the textarea.
- When user enter Github flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as user type. To markdown the text that the user types a Marked library used.
- When markdown previewer first leads, the defualt text in the #editor field should contain valid markdown that represents the following elements: a header(H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote,an image, and bolded text.
- When the app load markdown previewer first load, the default markdown in the #editor field should be rendered as HTML in the #preview element.

### Some examples used when creating the markdown previewer

\`\`\`

# Hello

## World

- List item 1
- List item 2
- List item 3

[codewars link](https://www.codewars.com/)

This is an line \`<div></div>\`

This is a block of code
\`\`\`
let x = 8
let y = 2
let return = x\*y
\`\`\`

**This is bold**

As Fyodor Dostoevsky said:

> Right or wrong, it's very pleasant to break something from time to time.

![Image](https://t4.ftcdn.net/jpg/01/02/89/35/360_F_102893505_9T3uAOypQ4LDntfPmS3nh3VnA6tImxYm.jpg)
\`\`\`

## Conclusion

In conclusion, this project made me to understand the reason why we name our blog post file '.md' and why we write header in a different syntax.
