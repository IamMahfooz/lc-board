import {Excalidraw, MainMenu, serializeAsJSON, WelcomeScreen, getSceneVersion} from "@excalidraw/excalidraw"
import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types"
import {AppState, BinaryFiles} from "@excalidraw/excalidraw/types/types"

const ExcalidrawWrapper: React.FC<{ probID: string | string[] }> = ({probID}) => {

    let sceneVersion = 0;
    const onchange = (elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => {
        if (getSceneVersion(elements) !== sceneVersion) {
            sceneVersion = getSceneVersion(elements)
            const content = serializeAsJSON(elements, appState, files, "local")
            localStorage.setItem(`excalidraw-${probID}`, content)
            console.log("saved the content with s-v", sceneVersion)
        }
    }
    const renderInitialData = () => {
        const content = localStorage.getItem(`excalidraw-${probID}`)
        sceneVersion = 0
        if (content != null) {
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