import React from "react";
import { createRoot } from "react-dom/client"; // <-- changement ici
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Sélection du container
const container = document.getElementById("root");
const root = createRoot(container); // <-- nouvelle racine

// Render ton App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesurer les performances (inchangé)
reportWebVitals();
