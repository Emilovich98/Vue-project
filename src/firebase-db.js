import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyD32tdH8TUGctnL4bMSpma9odHSFewR2Ek",
        authDomain: "vue-project-ec1ed.firebaseapp.com",
        databaseURL: "https://vue-project-ec1ed.firebaseio.com",
        projectId: "vue-project-ec1ed",
        storageBucket: "vue-project-ec1ed.appspot.com",
        messagingSenderId: "764489269356",
        appId: "1:764489269356:web:d9a26a5021024aa83b5849"
    })
    .firestore();

export const postRef = db.collection("posts")