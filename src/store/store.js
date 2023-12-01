import { createStore } from "redux";

import rootReducer from "../reduxReducer/index";

const store = createStore(rootReducer);

export default store;
