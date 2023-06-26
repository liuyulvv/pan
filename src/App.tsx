import {
  Button,
  FluentProvider,
  teamsDarkTheme,
  teamsLightTheme,
} from "@fluentui/react-components";
import { appWindow } from "@tauri-apps/api/window";
import "normalize.css";
import "./App.css";

const theme = await appWindow.theme();

function App() {
  return (
    <FluentProvider theme={theme === "dark" ? teamsDarkTheme : teamsLightTheme}>
      <div className="App">
        <div>
          <Button appearance="primary">Get started</Button>
        </div>
      </div>
    </FluentProvider>
  );
}

export default App;
