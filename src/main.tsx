import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter5Adapter } from "use-query-params/adapters/react-router-5";
import { ToastContextProvider } from "./common/toast/toast-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <QueryParamProvider adapter={ReactRouter5Adapter}>
        <ToastContextProvider>
          <App />
        </ToastContextProvider>
      </QueryParamProvider>
    </HashRouter>
  </React.StrictMode>
);
