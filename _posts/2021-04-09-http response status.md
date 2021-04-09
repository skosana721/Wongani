---
Layout:
Title: "HTTP response status code"
date: 2021-04-09
---

## Introduction

I will share some of the HTTP response statuses

## Body

### HTTP response status code

HTTP response status code indicates whether a specific HTTP request has been completed.

### Type of response status code

-Successful response (200-299)

- Client errors (400-499)
- Server errors (500-599)

### Successful response

## 200 OK

The request has succeeded. The meaning of the success depends on the HTTP method:
GET: The resource has been fetched and is transmitted in the message body.
HEAD: The entity headers are in the message body.
PUT or POST: The resource describing the result of the action is transmitted in the message body.
TRACE: The message body contains the request message as received by the server.

#### 201 Created

The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests or some PUT requests.

#### 202 Accepted

The request has been received but not yet acted upon. It is noncommittal since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

### Client error responses

#### 400 Bad Request

The server could not understand the request due to invalid syntax.
401 Unauthorized
Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

#### 402 Payment Required

This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however, this status code is used very rarely and no standard convention exists.

#### 404 Not Found

The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

### Server response error

#### 500 Internal Server Error

The server has encountered a situation it doesn't know how to handle.

#### 501 Not Implemented

The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.

#### 502 Bad Gateway

This error response means that the server while working as a gateway to get a response needed to handle the request, got an invalid response.

## Conclusion

In conclusion, the HTTP response status code is important in letting the user know that the request that they made was successful or not.
