import "./index.css";
import ScreenContainer from "./app/screen-container/ui/ScreenContainer";
import { Auth1, Auth2, Auth3, Info, Profile, Teka } from "./pages";

function App() {
  return (
    <div className="App">
      <ScreenContainer>
        <Profile />
      </ScreenContainer>
    </div>
  );
}

export default App;
