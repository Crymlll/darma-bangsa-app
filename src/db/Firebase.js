import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4chKxoj1an3ENg1zF8mOTR9kYbDnssl4",
    authDomain: "darma-bangsa-news.firebaseapp.com",
    databaseURL: "https://darma-bangsa-news-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "darma-bangsa-news",
    storageBucket: "darma-bangsa-news.appspot.com",
    messagingSenderId: "1051057724673",
    appId: "1:1051057724673:web:73a28aede412909d520f00",
    measurementId: "G-XDW1W2PETB"
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };