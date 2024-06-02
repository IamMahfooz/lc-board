"use client"
import dynamic from "next/dynamic";
//
// // Since client components get prerenderd on server as well hence importing
// // the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () => (await import("../../excalidrawWrapper")).default,
  {
    ssr: false,
  },
);
export default function Page() {
  return (
    <div className="sticky z-40 h-[calc(100vh-3.5rem)] w-screen">
    <ExcalidrawWrapper />
    </div>
  );
}