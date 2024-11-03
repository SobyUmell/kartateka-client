import { createStore, combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
