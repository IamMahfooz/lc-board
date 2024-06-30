import {Excalidraw, MainMenu, serializeAsJSON, WelcomeScreen, getSceneVersion} from "@excalidraw/excalidraw"
import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types"
import {AppState, BinaryFiles} from "@excalidraw/excalidraw/types/types"
import {setBoardData, getBoardData} from '@/app/components/custom/firebase-utils';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '@/app/components/custom/firebase-auth';
import {json} from 'node:stream/consumers';

const ExcalidrawWrapper: React.FC<{ probID: string | string[] }> = ({probID}) => {

    let sceneVersion = 0;
    const onchange = (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => {
        if (getSceneVersion(elements) !== sceneVersion) {
            sceneVersion = getSceneVersion(elements)
            const content = serializeAsJSON(elements, appState, files, "local")
            localStorage.setItem(`excalidraw-${probID}`, content)
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log("changed to writing board data")
                    // @ts-ignore
                    setBoardData(user.email.toString(), probID.toString(), content, sceneVersion).catch((e) => console.error(e))
                }
            });
        }
    }
    const renderInitialData = () => {
        const content = localStorage.getItem(`excalidraw-${probID}`)
        if (content != null) {
            sceneVersion = JSON.parse(content).sceneVersion
            return JSON.parse(content)
        } else {
            return null
        }
    }
    return (
        <div className="flex h-full w-full">
            <Excalidraw onChange={onchange} initialData={renderInitialData()}>
                <WelcomeScreen>
                    <WelcomeScreen.Center>
                        <WelcomeScreen.Hints.ToolbarHint>
                            <p> ToolBar Hints </p>
                        </WelcomeScreen.Hints.ToolbarHint>
                        <WelcomeScreen.Hints.MenuHint/>
                        <WelcomeScreen.Hints.HelpHint/>
                        <WelcomeScreen.Center.Heading>
                            Welcome to LC-Board !!
                        </WelcomeScreen.Center.Heading>
                    </WelcomeScreen.Center>
                </WelcomeScreen>
                <MainMenu>
                    <MainMenu.DefaultItems.LoadScene/>
                    <MainMenu.DefaultItems.Export/>
                    <MainMenu.DefaultItems.SaveAsImage/>
                    <MainMenu.DefaultItems.ClearCanvas/>
                    <MainMenu.DefaultItems.ChangeCanvasBackground/>
                    <MainMenu.DefaultItems.Help/>
                </MainMenu>
            </Excalidraw>
        </div>
    )
}
export default ExcalidrawWrapper