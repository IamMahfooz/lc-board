"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
export function Search(){  const searchParams = useSearchParams()
  const problemId = searchParams.get('problemId')
  const pageTitle = `White Board - ${problemId}`
  return (
    <>
      <title>{pageTitle}</title>
      <div className="flex items-center justify-center min-h-screen ">
        <div
          className="relative pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="flex space-x-3 px-4">
            <div>Get Ready to Brainstorm with your problem- {problemId}!</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default function GenericPage(){
  return(
  <Suspense>
    <Search/>
  </Suspense>
  )
}