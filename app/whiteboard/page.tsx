"use client"
import dynamic from "next/dynamic"
import {useParams} from "next/navigation"

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
    async () => (await import("../components/custom/excalidrawWrapper")).default,
    {
        ssr: false,
    },
)
export default function WhiteBoard() {
    const genericpage = "Default"
    const pageTitle: string = `PB - ${genericpage}`
    return (
        <>
            <title>{pageTitle}</title>
            <center>Get Ready to brainstorm - {genericpage} !!</center>
            <div className="sticky z-40 flex h-[calc(100vh-4.5rem)] w-screen">
                <ExcalidrawWrapper probID={genericpage}/>
            </div>
        </>
    )
}