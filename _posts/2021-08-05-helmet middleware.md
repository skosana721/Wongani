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

It is used to hide the 'X-Power-BY:' so that no one can be able to know the type of server you are working on.

#### helmet.frameguard()

This prevents people from putting <frame> or <iframe> without your consent which can result in clickjacking attacks. Clickjacking is a technique of tricking a user into interacting with a page different from what the user thinks it is. This can be obtained by executing your page in a malicious context, utilizing iframing. In that context, a hacker can put a hidden layer over your page. Hidden buttons can be used to run bad scripts. It has three options: 'deny', 'SAMEORGIN', 'allow-from'.

#### helmet.xxsFilter()

It prevents Cross-Site scripting (XSS) which is a malicious script where the attacker injects malicious scripts to a vulnerable page, to steal sensitive data like session cookies, or passwords.

#### helmet.noSniff()

It prevents the browser from use content or MIME sniffing to override response Content_Type headers to guess and pr0cess the data using an implicit content type.

#### helmet.ieNoOpen()

It prevents the internet explore from downloading untrusted HTML pages that could cause bad behaviour in the context of your pages.

#### helmet.hsts()

The HTTP Strict Transport Security(HSTS) is a web security policy that helps to protect websites against protocol downgrade attacks and cookie hijacking.

## Conclusion

In conclusion, so implementing helmet in your web application can help increase the security of the app and also protect the user's private information from being accessed by people who do not have permission.
