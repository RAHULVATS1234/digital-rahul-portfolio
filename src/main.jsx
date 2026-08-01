import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { initGA, trackPageView } from "./utils/analytics";
import { initClarity } from "./utils/clarity";

// Initialize Analytics
initGA();
trackPageView();

// Initialize Microsoft Clarity
initClarity();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);