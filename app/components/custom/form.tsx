"use client"

import {z} from "zod"
import {useRouter} from "next/navigation"

const formSchema = z.object({
    problemId: z.string().min(0, {
        message: "problem id must be at least 1 digit.",
    }),
})

export default function ProfileForm(form: any) {
    const router = useRouter();
    return function onSubmit(values: z.infer<typeof formSchema>) {
        router.push(`/problems/${values.problemId}`)
    }
}
