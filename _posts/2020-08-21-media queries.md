---
Layout: 
Title: "Media queries"
date: "2020-08-21"
Categories:
---


## Introduction

I'm going to share about media queries as it was something that I had to implement in a javascript test that I was given.

## Body

### What is media queries?

Media queries are useful when you want to modify your site or app depending on a device's general type(such as print vs screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).

The use of media queries are as follows:

- To conditionally apply styles with the CSS @media and @import at-rules.
- To target specific media for the <style>, <link>, <source>, and other HTML elements with the media= attribute.
- To test and monitor media states using the Window.matchMedia()  and MediaQueryList.addListener() JavaScript methods.

### Syntax

A media query is composed of an optional media type and any number of media feature expressions. Multiple queries can be combined in various ways by using logical operators. Media queries are case-insensitive.

A media query computes to true when the media type (if specified) matches the device on which a document is being displayed and all media feature expressions compute as true. Queries involving unknown media types are always false.

### Media types

Media types describe the general category of a device. Except when using the not or only logical operators, the media type is optional and all types will be implied.

all
- Suitable for all devices.

print
- Intended for paged material and documents viewed on a screen in print preview mode. (Please see paged media for information about formatting issues that are specific to these formats.)

screen
- Intended primarily for screens.

speech
- Intended for speech synthesizers.

## Conclusion

The javascript test that we were given made me understand the importance of why it is good practice to use media queries when creating a website.