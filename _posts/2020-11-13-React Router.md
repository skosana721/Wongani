---
Layout: 
Title: "React Router"
date: "2020-11-13"
Categories:
---

## Introduction 

I will share about react-router 

## Body 

### What is Routing?
 
Is the process of resource navigation in a web app. This is how your app determines what to with a client request.

### Routers 

The react-router package includes some routers that we can take advantage of depending on the platform we targeting. These include BrowserRouter, HashRouter, and MemoryRouter.

#### BrowserRouter

The BrowserRouter is used for applications that have a dynamic server that knows how to handle any type of URL.

#### HashRouter

The HasRouter is used for static websites with a server that only responds to requests for files that it knows about.

### What is React Router?

React Router is a tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements components according to the needs of the application and platform.

#### Switch

The react-router library also contains a <Switch/> component that is used to wap multiple <Route/> components. The Switch components only pick the first matching route among all its children's routes. 

Example of Switch component:

function App (){
    return(
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}

#### Link 

The react-router package also contains a <Link/> component that is used to navigate the different parts of an application by way of hyperlinks. It is similar to HTML's anchor element but the main difference is that using the Link component does not reload the page but rather, changes the UI. Using an anchor tag would require that the page reloads to load the new UI. When the Lin component is clicked, it also updates the URL.

Example of Link component:

function Navbar(){
    return (
        <div>
        <Link to='/'>Home</Link>
         <Link to="/about">About</Link>
          <Link to="/items">Items </Link>
        </div>
    )
}

## Conclusion 

React Router makes navigating around your React app easily and also it's clean, organized, and it makes adding and deleting pages a whole lot easier.


