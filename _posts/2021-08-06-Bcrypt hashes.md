---
Layout:
Title: "Bcrypt hashes"
date: 2021-08-06
---

## Introduction

I will share bcrypt hashes

## Body

### Bcrypt

Bcrypt is a secured way to store passwords in my database regardless of whatever language my app’s backend is built in — PHP, Ruby, Python, Node.js, etc. A hash is a fingerprint of the original data - always unique. This is accomplished by feeding the original data into an algorithm and returning a fixed-length result. To further complicate this process and make it more secure, you can also salt hash. Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.

Salted hashing - Generating random bytes (the salt) and combining them with eh password before hashing creates unique hashes across each user's password. If two users have the same password they will not have the same password hash. This is to prevent rainbow table attacks which can reverse hashed passwords using common hashing functions that do not utilize a salt.

#### Structure of bcrypt hashes

$2b$12$BMcI0S27MVwoHbxMA11Zve/tWBm6nPGVXL.2vo9fh7G36KHrQkThm

The first small bit of data $2b is defining what kind of hash algorithm was used. The next portion $12 defines the cost. Cost is about how much power it takes to compute the hash. It is one logarithmic scale of 2^cost and determines how many times the data is put roughly in the hashing algorithm. For example, at a cost of 10, you can hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would take multiple days to complete a hash.  A cost of 12 is considered very secure at this time. A cost of 12 is considered very secure at this time.
The last portion of your hash 12$BMcI0S27MVwoHbxMA11Zve/tWBm6nPGVXL.2vo9fh7G36KHrQkThm, looks like one large string of numbers, periods, and letters but it is two separate pieces of information. The first 22 characters are the salt in plain text, and the rest is the hashed password.

## Conclusion

In conclusion, using bcrypt make it hard for hackers to decode the user passwords if by any choices that they are leaked.
