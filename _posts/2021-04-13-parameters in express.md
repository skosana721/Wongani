---
Layout:
Title: "Parameter in express"
date: 2021-04-13
---

## Introduction

I will share about Moral's activity which is an employee tracker app which is a mern stack app, which I am not required to use MongoDB to store the info but I should the info local in the express.

## Body

So I would say that build a mern stack app I find it that is a little hard, simply because that I'm busy referring to the internet on how to do some of the things. And I have been watching a tutorial about express is come well but I think that on my end I should put more practice because the effort that I am putting is not returning the results that I want. And I have learned about parameters in express which are params, query and body.

### Parameters in Express

#### req.params

- for path parameters (route parameter)

#### req.query

- for query parameters that appear after the "?" in the URL

For query parameters like ?search=James&limit=2

Example of query string using express:

app.get("/api/v2/query", (req, res) => {
const { search, limit } = req.query;
let sortedUsers = [...user];
if (search) {
sortedUsers = sortedUsers.filter((user) => user.name.includes(search));
}
if (limit) {
sortedUsers = sortedUsers.slice(0, Number(limit));
}
if (sortedUsers.length < 1) {
return res.status(200).json({ success: true, data: [] });
}
res.status(200).json(sortedUsers);
});

#### req.body

-for post parameters that appear inside the request body

## Conclusion

In conclusion, I will try to do more practice so that I can understand express but not only express but to understand frontend and backend like the back of my hand.
