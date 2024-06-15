'use client'

import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '@/app/components/custom/firebase-auth';

export default function Library() {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("the user is", user)
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
        } else {
            console.log("no user is", user)
            // User is signed out
            // ...
        }
    });
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <title> PB - Archive </title>
            <div
                className="relative pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="flex space-x-3 px-4">
                    <div> This is your Problem Archive page!</div>
                </div>
            </div>
        </div>
    )
}