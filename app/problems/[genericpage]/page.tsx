"use client"
import dynamic from "next/dynamic"
import parse from 'html-react-parser';
import {useState, useRef, useEffect} from 'react';
import {useParams} from 'next/navigation';

// Dynamically import the Excalidraw component without SSR
const ExcalidrawWrapper = dynamic(
    async () => (await import("../../components/custom/excalidrawWrapper")).default,
    {
        ssr: false,
    },
)

export default function GenericPage() {
    // statement fetching starts
    const [statement11, setStatement11] = useState("");
    const params = useParams();
    const {genericpage} = params;

    useEffect(() => {
        fetch(`https://leetcode-question-graphql.onrender.com/problem?id=${genericpage}`).then((response) => {
            console.log("called");
            response.json().then((data) => {
                if (data.question == null) {
                    setStatement11("<p>Unable to fetch the question. Contact Administrator!</p>");
                } else {
                    setStatement11(data.question.content);
                }
            });
        });
    }, [genericpage]); // Only run this effect when genericpage changes

    // page title
    const pageTitle: string = `PB - TestPage`;

    // dragger implementation starts
    const [columnWidth, setColumnWidth] = useState<number>(30); // Initial width set to 30%
    const isDragging = useRef<boolean>(false);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging.current) return;
        const newWidth = (event.clientX / window.innerWidth) * 100;
        if (newWidth >= 10 && newWidth <= 90) {
            setColumnWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className="z-40 w-screen h-screen">
            <div className="fixed flex mt-0  h-[calc(100vh-4rem)] w-screen">
                <div
                    className=" px-4 h-full w-full overflow-auto"
                    style={{width: `${columnWidth}%`}}
                >
                    Problem Statement:
                    <br/><br/><br/>
                    {parse(statement11)}
                </div>
                <div
                    className="resizer w-2 bg-gray-300 cursor-col-resize"
                    onMouseDown={handleMouseDown}
                />
                <div
                    className="h-full w-full"
                    style={{width: `${100 - columnWidth}%`}}
                >
                    <ExcalidrawWrapper probID={pageTitle}/>
                </div>
            </div>
        </div>
    );
}
