"use client"
import dynamic from "next/dynamic"
import parse from 'html-react-parser';
import {useState} from 'react';
import {useParams} from 'next/navigation';

// Dynamically import the Excalidraw component without SSR
const ExcalidrawWrapper = dynamic(
    async () => (await import("../components/custom/excalidrawWrapper")).default,
    {
        ssr: false,
    },
)

export default function GenericPage() {
    const [statement11, setStatement11] = useState("")
    fetch(`https://alfa-leetcode-api.onrender.com/select?titleSlug=two-sum`).then((response) => {
        response.json().then((data) => {
            // console.log(data.question)
            setStatement11(data.question)
        })
    });
    const pageTitle: string = `PB - TestPage`
    return (
        <div>
            <title>{pageTitle}</title>
            <div className="sticky z-40 flex w-screen">
                <div className="grid grid-cols-[30%_70%] h-[calc(100vh-4rem)] w-screen divide-x">
                    <div className="px-4 w-full overflow-auto">
                        {/*<ProblemStat/>*/}
                        Problem Statement:
                        <br/><br/><br/>
                        {parse(statement11)}
                    </div>
                    <div className="h-full w-full">
                        <ExcalidrawWrapper probID={pageTitle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

