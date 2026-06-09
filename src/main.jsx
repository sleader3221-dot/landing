import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FaqProvider } from "./context/FaqContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
    <FaqProvider>
      <App />
    </FaqProvider>
  </React.StrictMode>
  </BrowserRouter>
);
