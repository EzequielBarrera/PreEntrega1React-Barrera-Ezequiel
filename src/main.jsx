import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJADBy0CRvS47Ki-BgpOsDl2xu5qaY098",
  authDomain: "barrera-ezequiel.firebaseapp.com",
  projectId: "barrera-ezequiel",
  storageBucket: "barrera-ezequiel.appspot.com",
  messagingSenderId: "180316837786",
  appId: "1:180316837786:web:edef6e229792b8e6d8cc23",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
