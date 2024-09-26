// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2nOTVp1boCzhzXfgxVNbkkCDkA06dRUU",
    authDomain: "netflix-gpt-8c996.firebaseapp.com",
    projectId: "netflix-gpt-8c996",
    storageBucket: "netflix-gpt-8c996.appspot.com",
    messagingSenderId: "83978892597",
    appId: "1:83978892597:web:672bf182a5420be542887c",
    measurementId: "G-HXE5H8M2T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();