---
Layout: 
Title: "Week storage"
date: 2020-07-10
Categories:
---

# Introduction

I'm going to share about how the week was.

# Body 
At the start of the week, we were given an assignment to build an online spaza, which dealt with HMTL, CSS, and JavaScript. The part which I found was difficult had to do with capturing customer data when I click submit, which had to do with localstorage, but I also learned about sessionstorage.

## LocalStorage and SessionStorage

Web storage objects localStorage and sessionStorage allow us to save key/value pairs in the browser.

Storage methods and properties:

-setItem(key, value) – store key/value pair.
-getItem(key) – get the value by key.
-removeItem(key) – remove the key with its value.
-clear() – delete everything.
-key(index) – get the key on a given position.
-length – the number of stored items.

### localstorage 

-Shared between all tabs and windows from the same origin.
-The data does not expire. It remains after the browser restart and even OS reboots.

### Sessionstorage 

The sessionStorage object is used much less often than localStorage.

Properties and methods are the same, but it’s much more limited:

-The sessionStorage exists only within the current browser tab.
-Another tab with the same page will have different storage.
-But it is shared between frames in the same tab (assuming they come from the same origin).
-The data survives page refresh, but not closing/opening the tab.

# Conclusion

While doing the assignment, the problem that I had encountered was saving data to localstorage because I did not know localstorage, but did some google search and watched some tutorials about localstorage and even asked moral to get some idea, but ended up knowing about localstorage while the boring part being that I didn't know how to apply it to my assignment.