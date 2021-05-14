---
Layout:
Title: "firestore"
date: 2021-05-14
---

## Introduction

I will share about cloud firestore setting you the database.

## Body

### Cloud firestore

Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. Like Firebase Realtime Database, it keeps your data in sync across client apps through real-time listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or Internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud products, including Cloud Functions.

### Set up your database

If you don't readily have a firebase project you have to create one and navigate to the firestore on the firebase console that is where you can create your firebase database.

And you go to the project settings in the general settings that is where you can find the SDK and configuration section. In this section, you can select between three automatic radio buttons, CDN and config.

- Automatic

Load Firebase JavaScript SDK libraries dynamically from reserved Hosting URLs

- CDN

Load Firebase JavaScript SDK libraries from the CDN (content delivery network)

- Config

Get the snippet for your app's Firebase config object.

### Connecting the firebase with your app

#### React

installing firebase package"

npm install firebase

And in your react you have to import firebase and also copy the firebaseConfig object from firebase.

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
apiKey: '### FIREBASE API KEY ###',
authDomain: '### FIREBASE AUTH DOMAIN ###',
projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();

#### JavaScript

You add the Firebase and Cloud Firestore libraries to your app in the HTML head.

<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js"></script>

And in the JavaScript file that is where would add the config object also.

## Conclusion

In conclusion, I understand that much about firebase which I think is a starting point for me so when I am planning to understand saving data, reading, deleting data and updating data with firebase.
