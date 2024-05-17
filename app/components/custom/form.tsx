"use client"

import { z } from "zod"
import { useRouter,usePathname } from "next/navigation"

const formSchema = z.object({
  problemId: z.string().min(0, {
    message: "problem id must be at least 1 digit.",
  }),
})

export default function ProfileForm(form: any) {
  const router = useRouter();

  // 2. Define a submit handler.
  return function onSubmit(values: z.infer<typeof formSchema>) {
    router.push('/genericpage?problemId=' + values.problemId);
    // console.log(form)

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(form)
  }
}
