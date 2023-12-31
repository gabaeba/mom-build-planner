import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter5Adapter } from "use-query-params/adapters/react-router-5";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/mom-build-planner">
      <QueryParamProvider adapter={ReactRouter5Adapter}>
        <App />
      </QueryParamProvider>
    </HashRouter>
  </React.StrictMode>
);
