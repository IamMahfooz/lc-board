import {Excalidraw, WelcomeScreen,MainMenu} from "@excalidraw/excalidraw"
const ExcalidrawWrapper: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Excalidraw>
        <WelcomeScreen>
          <WelcomeScreen.Center>
          <WelcomeScreen.Hints.ToolbarHint>
            <p> ToolBar Hints </p>
          </WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.HelpHint />
          <WelcomeScreen.Center.Heading >
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
  );
};
export default ExcalidrawWrapper;