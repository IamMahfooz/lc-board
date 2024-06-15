import {auth} from "./firebase-auth"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {Dispatch, SetStateAction} from 'react';


export function signout(setUserState: Dispatch<SetStateAction<string>>) {
    signOut(auth).then(() => {
        console.log("logged out");
        // Sign-out successful.
        setUserState("Login");
    })
}

export function checkUserState(setUserState: Dispatch<SetStateAction<string>>) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("changed to signout")
            setUserState("Signout");
        } else {
            console.log("not signed in")
        }
    });
}

export function signupUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            console.log("user signed up !")
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, " : ", errorMessage);
            // ..
        });
}

export function loginUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("congrats , user signed in ")
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            console.log("credential do not match !!");
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
