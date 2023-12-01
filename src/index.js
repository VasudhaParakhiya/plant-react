import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { AppProvider } from "./context/productContext";
import { FilterProvider } from "./context/shopFilterContext";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </AppProvider>
    </Provider>
  </React.StrictMode>
  //
  //   <App />
  // </AppProvider>
);
