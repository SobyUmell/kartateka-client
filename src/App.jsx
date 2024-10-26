import "./index.css";
import ScreenContainer from "./app/screen-container/ui/ScreenContainer";
import { Auth1, Auth2, Auth3, Info, Profile, Teka } from "./pages";
import { AppRouter } from "./widgets";
import { MiniProfile } from "./widgets/mini-profile";
import { NavBar } from "./widgets";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <ScreenContainer>
            <AppRouter />
          </ScreenContainer>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
