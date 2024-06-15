import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBrlyEKMEOU9hTHYqxV5F09eXq011Np9vM",
    authDomain: "programmer-s-board.firebaseapp.com",
    projectId: "programmer-s-board",
    storageBucket: "programmer-s-board.appspot.com",
    messagingSenderId: "562566424848",
    appId: "1:562566424848:web:1d86fc2c84e7287bdddd95",
    measurementId: "G-J4K7CT5YCS"
};

// Initialize Firebease
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

