import "./index.css";
import ScreenContainer from "./app/screen-container/ui/ScreenContainer";
import { Auth1, Auth2, Auth3 } from "./pages";

function App() {
  return (
    <div className="App">
      <ScreenContainer>
        <Auth3 />
      </ScreenContainer>
    </div>
  );
}

export default App;
