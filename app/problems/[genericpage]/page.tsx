"use client"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"

// Since client components get prerenderd on server as well hence importing
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () => (await import("../../components/custom/excalidrawWrapper")).default,
  {
    ssr: false,
  },
)
export default function Page() {
  const params = useParams()
  const { genericPage } = params
  return (
    <div>
      <center>Get Ready to brainstorm {genericPage} !!</center>
      <div className="sticky z-40 flex h-[calc(100vh-4.5rem)] w-screen">
        <ExcalidrawWrapper />
      </div>
    </div>
  )
}