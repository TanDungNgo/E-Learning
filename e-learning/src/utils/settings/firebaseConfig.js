import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebase = initializeApp({
  apiKey: "AIzaSyCenHuhDER2MN5S5jt8j7DMWaPBQcYFQAw",
  authDomain: "uploadfiletofirebase-ae63f.firebaseapp.com",
  projectId: "uploadfiletofirebase-ae63f",
  storageBucket: "uploadfiletofirebase-ae63f.appspot.com",
  messagingSenderId: "548678075768",
  appId: "1:548678075768:web:d9a471afe85756f666348d",
});

// Firebase storage reference
const storageFirebase = getStorage(firebase);
export default storageFirebase;
