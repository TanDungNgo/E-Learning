import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    storageBucket: 'kaiwa-project-728e7.appspot.com'
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);