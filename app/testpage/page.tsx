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
    const params = useParams()
    const {genericpage} = params
    const [statement11, setStatement11] = useState("")
    // let result: string
    // fetch(`https://lcid.cc/${genericpage}`).then((response) => {
    //     const url = response.url
    //     const parts = url.split('/');
    //     result = parts[parts.length - 1] || parts[parts.length - 2];
    // }).then(() => {
    //     fetch(`https://alfa-leetcode-api.onrender.com/select?titleSlug=${result}`).then((response) => {
    //         response.json().then((data) => {
    //             console.log(data.question)
    //             setStatement11(data.question)
    //         })
    //     });
    // })
    fetch(`https://alfa-leetcode-api.onrender.com/select?titleSlug=two-sum`).then((response) => {
        response.json().then((data) => {
            console.log(data.question)
            setStatement11(data.question)
        })
    });
    const pageTitle: string = `PB - ${genericpage}`
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

// const ProblemStat = function () {
//     const params = useParams()
//     const {genericpage} = params
//     const [statement11, setStatement11] = useState("")
//     let slugTitle = fetch(`https://lcid.cc/${genericpage}`).then((response) => {
//         const url = response.url
//         fetch(`https://alfa-leetcode-api.onrender.com/select?titleSlug=two-sum`).then((response) => {
//             response.json().then((data) => {
//                 console.log(data.question)
//                 // setStatement11(data.question)
//             })
//         });
//     });
//
//     return (
//         <>
//             Problem Statement:
//             <br/><br/><br/>
//             {parse(statement11)}
//         </>
//     )
// }
