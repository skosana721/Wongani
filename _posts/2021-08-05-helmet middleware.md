---
Layout:
Title: "Helmet middleware"
date: 2021-08-05
---

## Introduction

I will share about helmet middleware.

## Body

### Helmet middleware

#### helmet.HidePoweredBy()

It is used to hide the 'X-Power-BY:' so that no one can be able to know the type of server you are working.

#### helmet.frameguard()

This prevent people from putting <frame> or <iframe> without your consent which can result in clickjacking attacks. Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. This can be obtained executing your page in a malicious context, by mean of iframing. In that context a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. It has three options: 'deny', 'same origin', 'allow-from'.

#### helmet.xxsFilter()

It prevents Cross-Site scripting (XSS) which is a malicious script where the attacker injects malicious scripts to a vulnerable pages, with teh purpose of stealing sensitive data like session cookies, or passwords.

#### helmet.noSniff()

It prevents the browser from use content or MIME sniffing to override response Content_Type headers to guess and pr0cess the data using an implicit content type.

#### helmet.ieNoOpen()

It prevents the internet explore from downloading untrusted HTML page that could cause bad behavior in the context of your pages.

#### helmet.hsts()

The HTTP Strict Transport Security(HSTS) is a web security policy which helps to protect websites against protocol downgrade attacks and cookie hijacking.

## Conclusion
