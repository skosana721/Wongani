---
Layout:
Title: "Redux persist"
date: 2021-02-23
Categories:
---

## Introduction

I will share what I have learned regarding redux persist and using it with reactjs.

## Body

### What is redux persist?

Redux persist is a library allowing you to save redux store in the local storage of your browser.

Whenever you reload your app, the javascript process has nothing in memory. You will have to re-initialize the state, and maybe set some basic state which will be hardcoded so when the browser reloads you don't have to re-initialize the state. In such a case that is when redux persist come's to play.

The redux-store or some part of it can be persisted in the browse localStorage easily!

### Using Redux persist

The first thing that is needed to use redux-persist is that your application needs to have redux as your manager and also you will have to install a package called redux-persist.

#### Installation for redux-persist

npm install --save redux-persist - OR - yarn add redux-persist

Step 1:

In the redux folder will need to go to the redux-store folder in the index file, you have to import persistStore from redux-persist
and create a const variable persistor which you assign to persistStore and pass the store as an argument.

Here's an example

import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

const composeEnhancers = window.**REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose;

export const store = createStore(
rootReducer,
composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

step 2:

- In the rootReducer file you have to import persistReducer from redux-persist and also import Storage from "redux-persist/lib/storage". After doing some you create a const variable persistConfig which is an object that has a key of "key" and value of "root " and storage for the type of storage you will use and lastly you have whitelist and blacklist. Whitelist is an array in which you pass which state in your redux-store you want to persist and blacklist is also an array but you only state that you don't want to persist.

-After declaring the persistConfig you can pass both rootReducer and persistConfig to persistReducer which would be passed as arguments.

here's an example:
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { viewCarReducer } from "./viewCar/viewCarReducer";

const persistConfig = {
key: "root",
storage,
whitelist: ["register"],
};
const rootReducer = combineReducers({
register: registerFormReducer,
view: viewCarReducer,
});

export default persistReducer(persistConfig, rootReducer);

Step 3 :

- In the index of the main app you will need to import PersistGate from "redux-persist/integration/react" and also import persistor from your store index file. In the index file, you wrap the app component with PersistGat. This delays the rendering of your app's UI until your persisted stat has been retrieved and saved to redux.

Here's an example:

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

ReactDOM.render(
<React.StrictMode>
<Provider store={store}>
<PersistGate persistor={persistor}>
<App />
</PersistGate>
</Provider>
</React.StrictMode>,
document.getElementById("root")

### Conclusion

In conclusion, these were some of the steps that I took for me to be able to use redux-persist in-app and I would that if it wasn't for Moral giving us an activity where we were supposed to use redux-persist I don't think I would have known about redux-persist.
