import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "@shared/globalStyles/globalStyles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <App />
    </React.StrictMode>,
);
