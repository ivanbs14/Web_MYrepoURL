import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqaKusWUxohTSJu75gSa3rhRZC6WJINZk",
  authDomain: "myrepourl.firebaseapp.com",
  projectId: "myrepourl",
  storageBucket: "myrepourl.appspot.com",
  messagingSenderId: "337443624082",
  appId: "1:337443624082:web:88c3cc4289a6a9ae1fc24b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase authentication object
const auth = getAuth(app);

export { auth };
