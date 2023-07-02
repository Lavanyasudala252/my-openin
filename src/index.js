import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MenuHandleProvider } from "./context/menuHandle";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="693769278730-vv27vupemal1kafko063k7nlsb9e8om9.apps.googleusercontent.com">
      <BrowserRouter>
        <MenuHandleProvider>
          <App />
        </MenuHandleProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
