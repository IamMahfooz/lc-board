"use client";
import dynamic from "next/dynamic";
const Excalidraw = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);

const ExcalidrawWrapper: React.FC = () => {
  return (
    <div className="" style={{height:"900px"}}>
      <Excalidraw />
    </div>
  );
};
export default ExcalidrawWrapper;