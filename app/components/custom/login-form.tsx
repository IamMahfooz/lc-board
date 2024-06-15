"use client"

import {z} from "zod"
import {useRouter} from "next/navigation"
import {signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "../custom/firebase-auth"


const loginFormSchema = z.object({
    email: z.string().email({message: 'Email is required'}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
})

export default function LoginProfileForm(form: any) {
    const router = useRouter();
    return function onSubmit(values: z.infer<typeof loginFormSchema>) {
        // user sign in
        signInWithEmailAndPassword(auth, values.email, values.password)
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
        router.push(`/`)
    }
}
