// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANxLuqvEe4F-hlZYTv2i19GvVj2mE7DSw",
  authDomain: "cijs77.firebaseapp.com",
  projectId: "cijs77",
  storageBucket: "cijs77.appspot.com",
  messagingSenderId: "926764344543",
  appId: "1:926764344543:web:247d7dd821de7075bd356a",
  measurementId: "G-XHH4B6TP30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function Login(email, password, callback, errorCallback) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      callback(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      errorCallback(errorCode);
    });
}

export function Register(name, email, password, callback, errorCallback) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        // Profile updated!
        callback(user);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      errorCallback(errorCode);
    });
}
