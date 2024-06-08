"use client"

import {z} from "zod"
import {useRouter} from "next/navigation"

const signupFormSchema = z.object({
    email: z.string().email({message: 'Email is required'}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
    confirmPassword: z.string().min(8, {message: "Password Didn't match"}),
})

export default function SignupProfileForm(form: any) {
    const router = useRouter();
    return function onSubmit(values: z.infer<typeof signupFormSchema>) {
        router.push(`/`)
    }
}
