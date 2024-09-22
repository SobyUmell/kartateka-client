import "./index.css";
import ScreenContainer from "./app/screen-container/ui/ScreenContainer";
import { Auth1, Auth2, Auth3, Info, Profile, Teka } from "./pages";
import { MiniProfile } from "./widgets/mini-profile";

function App() {
  return (
    <div className="App">
      <ScreenContainer>
        <MiniProfile height={1} />
      </ScreenContainer>
    </div>
  );
}

export default App;
