import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBDiHev6Uy6ds0-E51KTzMm3Iu_fQ0hO_I",
    authDomain: "my-blog-61dd0.firebaseapp.com",
    projectId: "my-blog-61dd0",
    storageBucket: "my-blog-61dd0.appspot.com",
    messagingSenderId: "738062669531",
    appId: "1:738062669531:web:9cc8a2ed2a9cff42421efe",
    measurementId: "G-YDM1E7ZJ4B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);