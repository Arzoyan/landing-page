import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/reset.css"; // Import Ant Design global styles
import "./styles/main.scss"; // Your custom SCSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
