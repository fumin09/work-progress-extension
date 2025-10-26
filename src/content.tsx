import React from "react";
import ReactDOM from "react-dom/client";
import { ProgressBar } from "./ProgressBar";

const container = document.createElement("div");
container.style.position = "fixed";
container.style.top = "10px";
container.style.right = "10px";
container.style.zIndex = "999999";
container.style.background = "white";
container.style.padding = "8px";
container.style.borderRadius = "8px";
container.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
document.body.appendChild(container);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <ProgressBar />
  </React.StrictMode>
);
