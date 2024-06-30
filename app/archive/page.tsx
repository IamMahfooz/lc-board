'use client'
import {getUserData, setBoardData} from '@/app/components/custom/firebase-utils';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '@/app/components/custom/firebase-auth';

export default function Library() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // @ts-ignore
            console.log("user", user.email)
            // @ts-ignore
            getUserData(user.email.toString()).catch(e => {
                console.error(e)
            })
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