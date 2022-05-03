import reducers from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createStore } from "redux";

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
