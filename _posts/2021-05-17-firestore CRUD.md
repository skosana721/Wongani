---
Layout:
Title: "FireStore CRUD"
date: 2021-05-17
---

## Introduction

I will share about firestore CRUD which just simply stands for Create, Read, Update and Delete

## Body

So the CRUD in firebase is not that different from MongoDB but the difference is that the syntax that is used is different because methods like 'doc' represent a change to the documents matching a query. And firebase auto-generates id for every document that is added to the firebase and that is because if you don't provide an id it will do it for you. And firebase documents are stored in an object called collection which those collections can be named and you can use them to add, get, delete and update documents with.

#### Add a document

firestore.collection('progress').add({
codeWar: "223",
freeCodeCamp: "html and Css",
typingAccuracy: "90",
typingWpm: "45",
})

So firestore is the database in firebase you want to use and 'progress' is the collection name that you want to add to your documents and then add method takes an object of values that you want to the 'progress' collection

#### Get a multiple documents

firestore.collection(('progress')
.get()
.then((snapShot) => {
snapShot.docs.forEach((doc) => {
console.log(doc.data());
});
});

So when getting documents called the database you when and the collection name that you want to get data from and then use the get method which is an async that returns a promise so the snapShot.docs is an array that is why you would need to loop through it.

#### Delete a document

fireStore.collection(('progress').doc('firestore-id').delete()

Also the same here to this time you use the doc method which is a document reference method in which you pass the id of the document that you want to delete in the collection.

#### Update a document

firestore.collection(('progress').doc('firestore-id').update({freeCodeCamp: 'ReactJS'})

Also the same here and you also you the doc method to reference the id that you want to update and the update method takes an object of value you want to update.

## Conclusion

In conclusion, I would say that understand getting documents, add new documents, deleting and updating documents. So when need to understand authentication using firebase so that I can know how Moral implemented authentication in the tcg-student-tracker app.
