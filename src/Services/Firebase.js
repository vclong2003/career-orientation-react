// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5TxDRbtpHrlWgd-HD-E2ozBBoj3NKGUo",
  authDomain: "orientation-8239d.firebaseapp.com",
  projectId: "orientation-8239d",
  storageBucket: "orientation-8239d.appspot.com",
  messagingSenderId: "958194755549",
  appId: "1:958194755549:web:f260b61419d7ea603b3834",
  measurementId: "G-RN1EJX0SHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


