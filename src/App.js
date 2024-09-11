import "./index.css";
import ScreenContainer from "./app/screen-container/ui/ScreenContainer";
import { Auth1 } from "./pages/auth-1";
function App() {
  return (
    <div className="App">
      <ScreenContainer>
        <Auth1 />
      </ScreenContainer>
    </div>
  );
}

export default App;
