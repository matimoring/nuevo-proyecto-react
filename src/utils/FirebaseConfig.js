// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWfXkmfuADxkEi_AFAHpl_OpKnf7I_kjo",
    authDomain: "nuevo-proyecto-react-cafe.firebaseapp.com",
    projectId: "nuevo-proyecto-react-cafe",
    storageBucket: "nuevo-proyecto-react-cafe.appspot.com",
    messagingSenderId: "75678390823",
    appId: "1:75678390823:web:5654680f3f1ab4acdf0c02",
    measurementId: "G-MBWLBXE3R0"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore Initialize
const db = getFirestore(app);

export default db