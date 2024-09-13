import "./index.css";
import ScreenContainer from "./app/screen-container/ui/ScreenContainer";
import { Auth1, Auth2, Auth3, Info } from "./pages";

function App() {
  return (
    <div className="App">
      <ScreenContainer>
        <Info />
      </ScreenContainer>
    </div>
  );
}

export default App;
