import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyCm9d63FSTA0_0AMCFEWuGhdreMCtj4JJg",
    authDomain: "fir-react-upload-bad49.firebaseapp.com",
    projectId: "fir-react-upload-bad49",
    storageBucket: "fir-react-upload-bad49.appspot.com",
    messagingSenderId: "546825938108",
    appId: "1:546825938108:web:e8254bdfe57edd4d8a5cb9",
    measurementId: "G-K6P6N7TK27"

    // apiKey: "AIzaSyCenHuhDER2MN5S5jt8j7DMWaPBQcYFQAw",
    // authDomain: "uploadfiletofirebase-ae63f.firebaseapp.com",
    // projectId: "uploadfiletofirebase-ae63f",
    // storageBucket: "uploadfiletofirebase-ae63f.appspot.com",
    // messagingSenderId: "548678075768",
    // appId: "1:548678075768:web:d9a471afe85756f666348d"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;