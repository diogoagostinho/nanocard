import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="content">
      <div className="navbar">
        <div className="navbar__left">
          <h3 className="navbar-title">
            <span className="bold-text">Nano</span>Card
          </h3>
        </div>
        <div className="navbar__right"></div>
      </div>
      <Home />
    </div>
  </React.StrictMode>
);
