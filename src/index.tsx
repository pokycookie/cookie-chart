import React from "react";
import ReactDOM from "react-dom/client";
import { LineChart } from "./lib/index";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="chart" style={{ width: "100%", height: "500px" }}>
      <LineChart />
    </div>
  </React.StrictMode>
);
