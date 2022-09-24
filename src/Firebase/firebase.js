import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCuEtntXm4_7-E4f75IU3PFEvzmsjuEj9k",
    authDomain: "powstik-frontend-test.firebaseapp.com",
    projectId: "powstik-frontend-test",
    storageBucket: "powstik-frontend-test.appspot.com",
    messagingSenderId: "199765969810",
    appId: "1:199765969810:web:bd33e2ebb0baebd6db0f4b",
    measurementId: "G-ZHE047M0EK"
};

firebase.initializeApp( firebaseConfig );

export {firebase}