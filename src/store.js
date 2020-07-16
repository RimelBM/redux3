import { createStore } from "redux";
import reducer from "./reducers/CounterReducer";
export default createStore(reducer);