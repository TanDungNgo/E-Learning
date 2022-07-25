import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebase = initializeApp({
  apiKey: "AIzaSyCm9d63FSTA0_0AMCFEWuGhdreMCtj4JJg",
  authDomain: "fir-react-upload-bad49.firebaseapp.com",
  projectId: "fir-react-upload-bad49",
  storageBucket: "fir-react-upload-bad49.appspot.com",
  messagingSenderId: "546825938108",
  appId: "1:546825938108:web:e8254bdfe57edd4d8a5cb9",
  measurementId: "G-K6P6N7TK27",
});

// Firebase storage reference
const storageFirebase = getStorage(firebase);
export default storageFirebase;
