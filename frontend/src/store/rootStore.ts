import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import authReducer from "../reducers/authReducer";

const store = createStore(authReducer);

export default store;
