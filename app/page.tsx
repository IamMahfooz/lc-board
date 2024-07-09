"use client";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import ProfileForm from "@/app/components/custom/form";
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
    problemId: z.string().min(1, {
        message: "Problem ID must be at least 1 character.",
    }),
});

export default function ProblemForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            problemId: "123",
        },
    });
    let onSubmit = ProfileForm(form);

    return (
        <>
            <title>PB - Form Page</title>
            <div
                className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">Welcome to LC-Board</h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Solve programming problems, write your logic, and store notes for interviews and revisions.
                        </p>
                    </div>
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="problemId"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Problem ID</FormLabel>
                                            <FormControl>
                                                <Input placeholder="123" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Enter the Problem ID of your LeetCode question.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full">
                                    Submit
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="text-center mt-4 ">
                        <p className="text-gray-600">
                            Get a partitioned page with the question on one side and a whiteboard on the other. Perfect
                            for interviews and self-practice!
                        </p>
                        <Button variant="link" className="text-blue-600"
                                onClick={() => window.open('https://github.com/IamMahfooz/lc-board', '_blank')}>
                            Explore LC-Board
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
