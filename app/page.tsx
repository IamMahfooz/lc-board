"use client"
import {ModeToggle} from "./components/ui/mode-toogle";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation"

export default function Home() {
    const router = useRouter();

    // router = useRouter()
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div
                className="relative pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="flex space-x-3 px-4">
                    <Button variant="outline" className="bg-green-600" onClick={() => {
                        router.push('/problems')
                    }}>Click Me</Button>
                    <ModeToggle/>
                </div>
            </div>
        </div>
    );
}
