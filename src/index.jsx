import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalContextProvider } from "./components/store/modal-context";
import { TShirtContextProvider } from "./components/store/tshirts-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <TShirtContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </TShirtContextProvider>
  //</React.StrictMode>
);
