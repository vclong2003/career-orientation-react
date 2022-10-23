// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSqnegcl4YWeoiUuI4TizO1XYHmQ8KZ2M",
  authDomain: "swin-biz-rockstar.firebaseapp.com",
  projectId: "swin-biz-rockstar",
  storageBucket: "swin-biz-rockstar.appspot.com",
  messagingSenderId: "70665343962",
  appId: "1:70665343962:web:032107c15462842a7726e3",
  measurementId: "G-7V644RY9KY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
