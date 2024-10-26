import { createStore } from "redux";
import { authReducer } from "./authReducer";

export const store = createStore(authReducer);
