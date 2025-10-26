import React from "react";
import ReactDOM from "react-dom/client";
import { ProgressBar } from "./ProgressBar";

const CONTAINER_ID = "work-progress-extension";

const ensureContainer = () => {
  const existing = document.getElementById(CONTAINER_ID);
  if (existing) {
    return existing;
  }

  const container = document.createElement("div");
  container.id = CONTAINER_ID;
  container.style.position = "fixed";
  container.style.top = "10px";
  container.style.right = "10px";
  container.style.zIndex = "2147483647";
  container.style.backgroundColor = "#ffffff";
  container.style.padding = "8px";
  container.style.borderRadius = "8px";
  container.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  container.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  container.style.width = "200px";

  document.body?.appendChild(container);
  return container;
};

const mount = () => {
  if (!document.body) {
    return;
  }

  const container = ensureContainer();
  if (!container.isConnected) {
    document.body.appendChild(container);
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ProgressBar />
    </React.StrictMode>
  );
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount, { once: true });
} else {
  mount();
}
