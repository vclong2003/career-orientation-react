// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import React, { useEffect, useState } from "react";

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

export function getCurrentUserInfo(callback) {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    const userInfo = { displayName, email, photoURL, emailVerified };
    callback(userInfo);
  } else {
    callback(null);
  }
}

export function Logout(callback) {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      callback();
    })
    .catch((error) => {
      // An error happened.
    });
}

export const UserContext = React.createContext();
export function UserProvider({ children }) {
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserObj(user);
      } else {
        // User is signed out
        setUserObj(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={userObj}>{children}</UserContext.Provider>
  );
}

const storage = getStorage();
export function UploadFile(
  folder = "",
  file,
  callback,
  errorCallback = () => {}
) {
  const storageRef = ref(storage, `${folder}/${file.name}`);

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        callback(url);
      });
    })
    .catch((err) => {
      errorCallback(err);
    });
}
