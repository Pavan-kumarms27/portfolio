import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/global.css";
import "./styles/themes.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/sections.css";
import "./styles/components.css";
import "./styles/animations.css";
import "./styles/responsive.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
