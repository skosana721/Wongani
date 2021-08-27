---
Layout:
Title: "cannot read property location of undefined"
date: 2021-08-26
---

## Introduction

I will share an error saying that "cannot read property 'location' of undefined".

## Body

So in the App.js component, I was setting up my routes so I imported BrowserRouter as Route, Switch, and Router from react-router-dom. And wrapped the components with the Router component which also has a Switch component which wraps the Route component which has the path and the component name.

### Routes set up

```
import { BrowserRouter as Route, Switch , Router} from "react-router-dom";

  <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/Dashboard" component={DashBoard} />
          <Route path="/user/register" component={RegisterForm} />
          <Route path="/user/login" component={LoginForm} />
        </Switch>
</Router>
```

So after saving these changes the app started to show the error 'Cannot read property location of undefined'. I tried debugging what was causing the problem but I could not see what was the problem because everything seemed to be fine. So what I did was I copied the error and searched it, still could not find what was causing the problem but I only found a clue that maybe the order of how you put them matter when you import them.

### Route setup solution

import { BrowserRouter as Router, Switch , Route} from "react-router-dom";

## Conclusion

In conclusion, I did not even know that when you import the Router, Switch, and Route from react-router-dom the order matters.
